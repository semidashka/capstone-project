import styled, { css } from 'styled-components';
import useStore from '../../hooks/useStore';

import HeadWord from './HeadWord';
import TranslItem from './TranslItem';
import { Card } from '../../components/styled';

export default function WordCard() {
  const ponsData = useStore(state => state.ponsData);
  const saveNewWordDB = useStore(state => state.saveNewWordDB);
  const wordSaved = useStore(state => state.wordSaved);

  return (
    <Card>
      <HeadWord />
      {ponsData.translations.map((translation, index) => (
        <TranslItem key={index} translation={translation} />
      ))}
      {wordSaved && <StyledMsg>Word saved succesfully!</StyledMsg>}
      {ponsData.wordclass && !wordSaved && (
        <SaveButton
          onClick={() => {
            saveNewWordDB(ponsData);
          }}
        >
          Save word
        </SaveButton>
      )}
    </Card>
  );
}

// const SaveWrapper = styled.div`
//   display: flex;
// `;

const StyledMsg = styled.p`
  ${props => css`
    color: ${props.theme.bright};
  `}
  font-style: italic;
  font-size: 1.2rem;
  margin: 0.7rem 0 0;
  padding: 0;
  /* align-self: flex-end; */
`;

const SaveButton = styled.button`
  margin: 0.7rem 0 0.7rem auto;
  padding: 0.5rem;
  ${props => css`
    border-radius: ${props.theme.borderRadius};

    border: 1px solid ${props.theme.bright};

    background: ${props.theme.bright};

    color: ${props.theme.dark};

    box-shadow: ${props.theme.boxShadow};
    max-width: 7rem;
  `}
`;
