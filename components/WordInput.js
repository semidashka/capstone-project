import { useState } from 'react';
import styled from 'styled-components';
import useStore from '../hooks/useStore';

import { Card, Button, Input, InputWrapper } from '../components/styled';

export default function WordInput() {
  const enteredWord = useStore(state => state.enteredWord);
  const storeEnteredWord = useStore(state => state.storeEnteredWord);
  const ponsData = useStore(state => state.ponsData);
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
          onChange={event => storeEnteredWord(event.target.value)}
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

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 6rem;
  text-align: center;
`;
