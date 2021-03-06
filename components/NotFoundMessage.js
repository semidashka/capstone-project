import styled from 'styled-components';
import { Button, Card } from './styled';
import useStore from '../hooks/useStore';

export default function NotFoundMessage() {
  const showWordNotFound = useStore(state => state.showWordNotFound);
  return (
    <>
      {showWordNotFound && (
        <Card>
          <StyledP>
            Sorry, I am a young app and do not know all the words yet.
          </StyledP>
          <StyledP>Try another word please!</StyledP>
        </Card>
      )}
    </>
  );
}

const StyledP = styled.p`
  color: red;
`;
