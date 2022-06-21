import styled, { css } from 'styled-components';

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
  width: 90vw;
  margin: 0.2rem auto;
  padding: 0.2rem 0.5rem;
`;

export const Button = styled.button`
  ${props => css`
    /* background: ${props.theme.buttonBg}; */

    border-radius: ${props =>
      props.clear
        ? props.theme.borderRadius
        : `0 ${props.theme.borderRadius} ${props.theme.borderRadius} 0`};

    border: 1px solid ${props.theme.dark};

    background: ${props => (props.clear ? 'transparent' : props.theme.dark)};

    color: ${props => (props.clear ? props.theme.dark : props.theme.light)};

    box-shadow: ${props.theme.boxShadow};

    padding: ${props => (props.clear ? '0.1rem' : '1.5rem')};
  `};

  display: block;
  padding: 0.4rem;
  max-width: 6rem;
`;

export const StyledWord = styled.h3`
  /* padding: 0 1rem; */
  margin: 1rem 0 0.4rem 0;
  font-size: 1.2rem;
  font-weight: 400;

  span {
    ${props => css`
      color: ${props.theme.buttonBg};
    `}
    font-size: 1rem;
    font-weight: 300;
    font-style: italic;
  }

  acronym {
    text-decoration: none;
  }
`;
