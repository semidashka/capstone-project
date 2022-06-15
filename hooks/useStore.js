import create from 'zustand';

const useStore = create((set, get) => {
  return {
    enteredWord: '',
    ponsData: {
      headword: '',
      headwordPlus: '',
      wordclass: null,
      translations: [],
    },
    wordNotFound: false,
    storeEnteredWord: word => set(() => ({ enteredWord: word })),
    fetchPonsData: async word => {
      const ponsData = get().ponsData;
      try {
        const response = await fetch(`/api/search-p?q=${word}`);
        if (response.status === 500) {
          set(() => ({ wordNotFound: true }));
          return;
        } else {
          const data = await response.json();
          // console.log(data);
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
                  set(() => ({ enteredWord: '' }));
                  return;
                } else if (!ponsData) {
                  set(() => ({ wordNotFound: true }));
                }
              })
            )
          );
        }
      } catch (err) {
        console.error(`Error: ${err}`);
      }
    },
  };
});

export default useStore;
