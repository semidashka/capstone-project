import useStore from '../../hooks/useStore';
import styled from 'styled-components';
import { StyledWord } from '../styled';
import styledComponents from 'styled-components';

export default function TranslItem({ translation }) {
  const ponsData = useStore(state => state.ponsData);
  const chooseTranslation = useStore(state => state.chooseTranslation);

  return (
    <>
      <StyledTranslation
        dangerouslySetInnerHTML={{
          __html: translation,
        }}
      />
      <button
        onClick={() => {
          chooseTranslation(translation);
        }}
      >
        Choose translation
      </button>
      {console.log(ponsData.chosenTranslations)}
    </>
  );
}

const StyledTranslation = styled(StyledWord)`
  padding-left: 1rem;
`;
