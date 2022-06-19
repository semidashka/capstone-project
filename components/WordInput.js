import { useState } from 'react';
import styled from 'styled-components';
import useStore from '../hooks/useStore';

import { Card, Button } from '../components/styled';

export default function WordInput() {
  const [enteredWord, setEnteredWord] = useState('');
  const refinedWord = useStore(state => state.refinedWord);
  const storeRefinedWord = useStore(state => state.storeRefinedWord);
  const fetchPonsData = useStore(state => state.fetchPonsData);

  return (
    <Card>
      <LabelWrapper>
        <label htmlFor="word"> De → Ru</label>
      </LabelWrapper>
      <InputWrapper>
        <Input
          id="word"
          type="text"
          placeholder="Enter a German word here"
          value={enteredWord}
          onChange={event => {
            setEnteredWord(event.target.value);
            const refinedWord = event.target.value.replace(/[^a-z]/gi, '');
            storeRefinedWord(refinedWord);
          }}
        />

        <Button
          onClick={event => {
            fetchPonsData(refinedWord);
          }}
        >
          Translate
        </Button>
      </InputWrapper>
    </Card>
  );
}

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 6rem;
  text-align: center;
  margin-bottom: 0.5rem;

  label {
    font-style: italic;
    color: hsl(154, 28%, 65%);
  }
`;

const InputWrapper = styled.div`
  display: flex;
  margin-top: 0.3rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
`;
