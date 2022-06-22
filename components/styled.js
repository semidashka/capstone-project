import styled, { css } from 'styled-components';

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.2rem 1rem;
  margin: auto;
`;

export const Button = styled.button`
  ${props => css`
    border-radius: ${props.clear
      ? props.theme.borderRadius
      : `0 ${props.theme.borderRadius} ${props.theme.borderRadius} 0`};

    border: 1px solid ${props.theme.dark};

    background: ${props.clear ? 'transparent' : props.theme.dark};

    color: ${props.clear ? props.theme.dark : props.theme.light};

    box-shadow: ${props.theme.boxShadow};
  `};
  padding: 0.3rem;
  max-width: 6rem;
`;

export const StyledWord = styled.h3`
  /* padding: 0 1rem; */
  margin: 1rem 0 0.4rem 0;
  font-size: 1.2rem;
  font-weight: 400;

  span {
    ${props => css`
      color: ${props.theme.dark};
    `}
    font-size: 1rem;
    font-weight: 300;
    font-style: italic;
  }

  acronym {
    text-decoration: none;
  }
`;
