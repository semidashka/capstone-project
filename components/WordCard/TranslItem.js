import useStore from '../../hooks/useStore';
import styled, { css } from 'styled-components';

export default function TranslItem({ translation }) {
  const ponsData = useStore(state => state.ponsData);
  const chooseTranslation = useStore(state => state.chooseTranslation);

  return (
    <>
      <CheckboxLabel>
        <StyledTranslation
          dangerouslySetInnerHTML={{
            __html: translation,
          }}
        />
        <Checkbox defaultChecked />
      </CheckboxLabel>
    </>
  );
}

const CheckboxLabel = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-left: auto;
  margin-bottom: 8px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  ${props => css`
    background-color: ${props.theme.buttonBg};
  `}
`;

export const StyledTranslation = styled.span`
  font-size: 1.3rem;
  ${props => css`
    ${Checkbox}:checked + && {
      color: ${props.theme.buttonBg};
    }
  `}
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
