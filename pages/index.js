import useStore from '../hooks/useStore';

import WordInput from '../components/WordInput';
import WordCard from '../components/WordCard/WordCard';
import NotFoundMessage from '../components/NotFoundMessage';

export default function Home() {
  const wordNotFound = useStore(state => state.wordNotFound);
  const ponsData = useStore(state => state.ponsData);
  const resetPonsData = useStore(state => state.resetPonsData);

  return (
    <>
      <WordInput />
      {wordNotFound ? <NotFoundMessage /> : <WordCard />}
    </>
  );
}
