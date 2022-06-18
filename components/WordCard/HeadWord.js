import useStore from '../../hooks/useStore';
import { StyledWord } from '../styled';

export default function HeadWord() {
  const ponsData = useStore(state => state.ponsData);
  return (
    <>
      {/* Outputs German word */}
      <StyledWord
        dangerouslySetInnerHTML={{
          __html: ponsData.headwordPlus,
        }}
      />
    </>
  );
}
