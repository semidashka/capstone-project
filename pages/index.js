import useStore from '../hooks/useStore';
import { useState } from 'react';

import WordInput from '../components/WordInput';
import WordCard from '../components/WordCard/WordCard';
import NotFoundMessage from '../components/NotFoundMessage';

export default function Home() {
  const wordNotFound = useStore(state => state.wordNotFound);
  const ponsData = useStore(state => state.ponsData);

  return (
    <>
      <WordInput />
      {wordNotFound ? <NotFoundMessage /> : <WordCard />}
    </>
  );
}
