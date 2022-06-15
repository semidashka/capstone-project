import useStore from '../../hooks/useStore';

import HeadWord from './HeadWord';
import TranslItem from './TranslItem';
import { Card, Button, Input, InputWrapper } from '../../components/styled';

export default function WordCard() {
  const ponsData = useStore(state => state.ponsData);
  const clearPonsData = useStore(state => state.clearPonsData);

  return (
    <Card>
      <HeadWord />
      {ponsData?.translations.map((translation, index) => (
        <TranslItem key={index} translation={translation} />
      ))}
    </Card>
  );
}
