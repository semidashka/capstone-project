import useStore from '../../hooks/useStore';
import { StyledWord } from '../styled';

export default function HeadWord() {
  const ponsData = useStore(state => state.ponsData);
  return (
    <>
      {/* Outputs German word */}
      {console.log(ponsData.headwordPlus)}
      <StyledWord
        dangerouslySetInnerHTML={{
          __html: ponsData.headwordPlus,
        }}
      />
    </>
  );
}
