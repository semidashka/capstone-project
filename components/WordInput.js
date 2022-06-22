import { useState } from 'react';
import styled, { css } from 'styled-components';
import useStore from '../hooks/useStore';

import { Card, Button } from '../components/styled';

export default function WordInput() {
  const [enteredWord, setEnteredWord] = useState('');
  const refinedWord = useStore(state => state.refinedWord);
  const storeRefinedWord = useStore(state => state.storeRefinedWord);
  const fetchPonsData = useStore(state => state.fetchPonsData);
  const resetWord = useStore(state => state.resetWord);

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
        <InputGrid>
          <SearchGrid>
            <Input
              id="word"
              type="text"
              // size="17"
              placeholder="A German word"
              aria-describedby="help-text"
              onChange={event => {
                setEnteredWord(event.target.value);
                const refinedWord = event.target.value.replace(/\d/gi, '');
                storeRefinedWord(refinedWord);
              }}
            />

            <Button type="submit">Translate</Button>
          </SearchGrid>
          <Button type="reset" clear aria-label="clear" onClick={resetWord}>
            <svg width={24} height={24} viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
              />
            </svg>
          </Button>
        </InputGrid>
        {/* <HelpText id="help-text">Please, enter a German word</HelpText> */}
      </InputForm>
    </Card>
  );
}

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
  flex: 1;
  gap: 0.3rem;
`;

const SearchGrid = styled.div`
  display: flex;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 6rem;
  text-align: center;

  label {
    font-style: italic;
    ${props => css`
      color: ${props.theme.dark};
    `}
  }
`;

const InputForm = styled.form`
  margin-top: 0.3rem;
`;

const HelpText = styled.p`
  margin: 0.2rem 0;
  font-size: 0.9rem;
  font-style: italic;
  ${props => css`
    color: ${props.theme.dark};
  `};
`;

const Input = styled.input`
  ${props => css`
    border: 1px solid ${props.theme.inputBorderColor};
    background-color: ${props.theme.inputBg};
    color: ${props.theme.inputTxt};
    box-shadow: ${props.theme.boxShadow};
    border-radius: ${props.theme.borderRadius} 0 0 ${props.theme.borderRadius};
  `};
  flex: 1 1 2rem;
  padding: 0.5rem;
  font-size: 1rem;
  width: 2rem;
`;
