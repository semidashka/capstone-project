import styled, { css } from 'styled-components';

export const Card = styled.section`
  max-width: 25rem;
  margin: 0.2rem auto;
  padding: 0.2rem 0.5rem;
`;

export const Button = styled.button`
  ${props => css`
    background-color: ${props.theme.buttonbg};
    color: ${props.theme.buttontxt};
    border-radius: 0 ${props.theme.borderRadius} ${props.theme.borderRadius} 0;
    border: 1px solid ${props.theme.bordercolor};
  `};
  display: block;
  border: 0;
  padding: 0.5rem;
  max-width: 6rem;
`;

export const StyledWord = styled.h3`
  padding: 0 1rem;
  font-size: 1.2rem;
  font-weight: 400;

  span {
    color: hsl(154, 28%, 50%);
    font-size: 1rem;
    font-weight: 300;
    font-style: italic;
  }

  acronym {
    text-decoration: none;
  }
`;
