import create from 'zustand';
import transliterate from '@sindresorhus/transliterate';

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
    wordSaved: false,
    storeRefinedWord: word => set(() => ({ refinedWord: word })),
    resetWord: () => {
      set(() => ({
        ponsData: {
          headword: 'bbb',
          headwordPlus: '',
          wordclass: null,
          translations: [],
        },
        showWordNotFound: false,
        wordSaved: false,
      }));
    },
    fetchPonsData: async word => {
      get().resetWord();
      const ponsData = get().ponsData;
      const transliterated = transliterate(word);
      console.log(transliterated, word);
      try {
        const response = await fetch(`/api/search-p?q=${transliterated}`);
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

                  set(() => ({
                    ponsData: newPonsData,
                    wordNotFound: false,
                    wordSaved: false,
                  }));
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

        set(() => ({ wordSaved: true }));
      } catch (err) {
        console.error(`Error: ${err}`);
      }
    },
  };
});

export default useStore;
