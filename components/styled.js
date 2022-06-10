import styled, { css } from 'styled-components';

export const Card = styled.section`
  /* background-color: white; */
  max-width: 25rem;
  margin: 1.5rem auto;
  padding: 1rem;
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

export const InputWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const Input = styled.input`
  ${props => css`
    border: 1px solid ${props.theme.bordercolor};
    background-color: ${props.theme.inputbg};
    color: ${props.theme.inputtxt};
    border-radius: ${props.theme.borderRadius} 0 0 ${props.theme.borderRadius};
  `};
  flex: 1;
  padding: 0.5rem;
`;
