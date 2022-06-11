import { useState } from 'react';
import useStore from '../hooks/useStore';

import { Card, Button, Input, InputWrapper } from '../components/styled';

export default function WordInput() {
  const [enteredWord, setEnteredWord] = useState('');

  const { ponsData, fetchPonsData } = useStore(state => ({
    ponsData: state.ponsData,
    fetchPonsData: state.fetchPonsData,
  }));

  function wordChangeHandler(event) {
    return setEnteredWord(event.target.value);
  }

  function fetchTranslationPons() {
    fetch(`api/search-p?q=${enteredWord}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setPonsData(data);
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <Card>
      <label htmlFor="word">German word to translate:</label>
      <InputWrapper>
        <Input
          id="word"
          type="text"
          placeholder="smth"
          value={enteredWord}
          onChange={wordChangeHandler}
        />

        <Button
          onClick={() => {
            fetchPonsData(enteredWord);
          }}
        >
          Translate
        </Button>
      </InputWrapper>
    </Card>
  );
}
