import create from 'zustand';

const useStore = create(set => {
  return {
    ponsData: {
      headword: '',
      headwordPlus: '',
      wordclass: null,
      translations: [],
    },
    wordNotFound: false,

    clearPonsData: () => {
      set(() => ({
        ponsData: {
          headword: '',
          headwordPlus: '',
          wordclass: null,
          translations: [],
        },
      }));
    },
    fetchPonsData: async word => {
      try {
        const response = await fetch(`/api/search-p?q=${word}`);
        if (response.status === 500) {
          set(() => ({ wordNotFound: true }));
          return;
        }

        const data = await response.json();
        console.log(data);
        let newPonsData;
        data.map(entry =>
          entry.hits.map(hit =>
            hit.roms.map(rom => {
              // console.log(rom);
              if (rom.headword.toLowerCase() === word.toLowerCase()) {
                newPonsData = {
                  headword: rom.headword,
                  headwordPlus: rom.headword_full,
                  wordclass: rom.wordclass,
                  id: rom.headword + '_' + rom.wordclass,
                  translations: [rom.arabs[0].translations[0].target],
                  chosenTranslations: [],
                };
              }
            })
          )
        );
        set(() => ({ ponsData: newPonsData }));
        console.log('newPonsData:');
        console.log(newPonsData);
        // How to console.log ponsData from here?
        // console.log(ponsData)
      } catch (err) {
        console.error(`Error: ${err}`);
      }
    },
    chooseTranslation: translation => {
      set(state => {
        return {
          ponsData: {
            ...state.ponsData,
            chosenTranslations: [
              ...state.ponsData.chosenTranslations,
              translation,
            ],
          },
        };
      });
    },
  };
});

export default useStore;
