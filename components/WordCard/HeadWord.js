import useStore from '../../hooks/useStore';
import styled from 'styled-components';

export default function HeadWord() {
  const ponsData = useStore(state => state.ponsData);
  return (
    <>
      {/* Outputs German word */}
      {console.log(ponsData.headwordPlus)}
      <StyledMainWord
        dangerouslySetInnerHTML={{
          __html: ponsData.headwordPlus,
        }}
      />
    </>
  );
}

const StyledMainWord = styled.h3`
  .flexion {
    color: hsl(0, 28%, 39%);
  }

  .phonetics {
    background-color: red;
  }

  .wordclass {
    background-color: blue;
  }

  .genus {
    background-color: green;
  }
`;
