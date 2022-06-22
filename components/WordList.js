import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { Card } from './styled';
import { StyledWord } from './styled';
import { StyledTranslation } from './WordCard/TranslItem';

export default function WordList({ kind }) {
  const [words, setWords] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/words-db', {
          method: 'GET',
        });
        const data = await response.json();
        setWords(data);
      } catch (err) {
        console.error(`Error: ${err}`);
      }
    })();
  }, []);

  return (
    <Card>
      <StyledUl>
        {words.map(word => (
          <StyledLi key={word._id}>
            {/* <pre>{JSON.stringify(word, null, 4)}</pre> */}
            <StyledWord2
              dangerouslySetInnerHTML={{
                __html: word.headwordPlus,
              }}
            />
            {/* <ul> */}
            {word.translations.map((translation, index) => (
              <StyledTranslation2
                key={index}
                dangerouslySetInnerHTML={{
                  __html: translation,
                }}
              />
            ))}
            {/* </ul> */}
          </StyledLi>
        ))}
      </StyledUl>
    </Card>
  );
}

const StyledUl = styled.ul`
  padding: 0;
`;

const StyledLi = styled.li`
  display: flex;
  flex-wrap: nowrap;
  padding: 0.3rem 0.7rem;
  margin-bottom: 0.6rem;
  ${props => css`
    border-radius: ${props.theme.borderRadius};

    /* border: 1px solid ${props.theme.dark}; */

    background-color: ${props.theme.pastel};

    box-shadow: ${props.theme.boxShadow};
  `}
`;

const StyledWord2 = styled(StyledWord)`
  width: 50%;
  margin-top: 0;

  span {
    display: block;
  }
`;

const StyledTranslation2 = styled(StyledTranslation)`
  width: 50%;
`;
