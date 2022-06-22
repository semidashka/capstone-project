import { useState } from 'react';
import styled, { css } from 'styled-components';
import useStore from '../hooks/useStore';

import { Card, Button } from '../components/styled';

export default function WordInput() {
  const [enteredWord, setEnteredWord] = useState('');
  const refinedWord = useStore(state => state.refinedWord);
  const storeRefinedWord = useStore(state => state.storeRefinedWord);
  const fetchPonsData = useStore(state => state.fetchPonsData);
  const closeWordCard = useStore(state => state.closeWordCard);

  return (
    <Card>
      <LabelWrapper>
        <label htmlFor="word"> De → Ru</label>
      </LabelWrapper>
      <InputForm
        onSubmit={event => {
          event.preventDefault();
          fetchPonsData(refinedWord);
        }}
      >
        <Input
          id="word"
          type="text"
          // size="17"
          placeholder="Enter a German word"
          onChange={event => {
            setEnteredWord(event.target.value);
            const refinedWord = event.target.value.replace(/\d/gi, '');
            storeRefinedWord(refinedWord);
          }}
        />

        <Button type="submit">Translate</Button>
        <Button type="reset" clear onClick={closeWordCard}>
          Clear
        </Button>
      </InputForm>
    </Card>
  );
}

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 6rem;
  text-align: center;
  margin-bottom: 0.1rem;

  label {
    font-style: italic;
    ${props => css`
      color: ${props.theme.dark};
    `}
  }
`;

const InputForm = styled.form`
  display: flex;
  margin-top: 0.3rem;
  justify-content: flex-start;
`;

const Input = styled.input`
  ${props => css`
    border: 1px solid ${props.theme.inputBorderColor};
    background-color: ${props.theme.inputBg};
    color: ${props.theme.inputTxt};
    box-shadow: ${props.theme.boxShadow};
    border-radius: ${props.theme.borderRadius} 0 0 ${props.theme.borderRadius};
  `};
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
`;
