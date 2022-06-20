import create from 'zustand';

const useStore = create((set, get) => {
  return {
    refinedWord: '',
    ponsData: {
      headword: '',
      headwordPlus: '',
      wordclass: null,
      translations: [],
    },
    wordNotFound: false,
    wordOtherForm: false,
    showWordNotFound: true,
    storeRefinedWord: word => set(() => ({ refinedWord: word })),
    fetchPonsData: async word => {
      const ponsData = get().ponsData;
      try {
        const response = await fetch(`/api/search-p?q=${word}`);
        if (response.status === 500) {
          set(() => ({
            wordNotFound: true,
            showWordNotFound: true,
          }));
          return;
        } else {
          const data = await response.json();
          console.log(data);
          let newPonsData;
          data.map(entry =>
            entry.hits.map(hit =>
              hit.roms.map(rom => {
                if (rom.headword.toLowerCase() === word.toLowerCase()) {
                  newPonsData = {
                    headword: rom.headword,
                    headwordPlus: rom.headword_full,
                    wordclass: rom.wordclass,
                    id: rom.headword + '_' + rom.wordclass,
                    translations: [rom.arabs[0].translations[0].target],
                    chosenTranslations: [],
                  };

                  set(() => ({ ponsData: newPonsData }));
                  set(() => ({ wordNotFound: false }));
                  return;
                }
              })
            )
          );
          if (!newPonsData) {
            const fetchPonsData = get().fetchPonsData;
            fetchPonsData(data[0].hits[0].roms[0].headword);
          }
        }
      } catch (err) {
        console.error(`Error: ${err}`);
      }
    },
    closeWordCard: () => {
      set(() => ({
        ponsData: {
          headword: 'bbb',
          headwordPlus: '',
          wordclass: null,
          translations: [],
        },
        showWordNotFound: false,
      }));
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
    saveNewWordDB: async data => {
      try {
        const response = await fetch('/api/words-db', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const message = await response.json();
        console.log(message);
      } catch (err) {
        console.error(`Error: ${err}`);
      }
    },
  };
});

export default useStore;
