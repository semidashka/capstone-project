import styled from 'styled-components';
import { Button, Card } from './styled';
import useStore from '../hooks/useStore';

export default function NotFoundMessage() {
  const enteredWord = useStore(state => state.enteredWord);

  return (
    <Card>
      <StyledP>
        Sorry, I am a young app and do not know all the words yet.
      </StyledP>
      <StyledP>Try another word please!</StyledP>
      <Button>OK</Button>
    </Card>
  );
}

const StyledP = styled.p`
  color: red;
`;
