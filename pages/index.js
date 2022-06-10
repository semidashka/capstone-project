import useStore from '../hooks/useStore';
import { useState } from 'react';

import WordInput from '../components/WordInput';
import WordCard from '../components/WordCard/WordCard';

export default function Home() {
  const ponsData = useStore(state => state.ponsData);
  const [showList, setShowList] = useState(false);

  function showWordsList() {
    setShowList(!showList);
  }

  return (
    <>
      <WordInput />
      <WordCard />
    </>
  );
}
