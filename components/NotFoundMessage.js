import styled from 'styled-components';
import { Card } from './styled';

export default function NotFoundMessage() {
  return (
    <Card>
      <StyledP>
        Sorry, I am a young app and don't know all the words yet. Try other
        words please!
      </StyledP>
    </Card>
  );
}

const StyledP = styled.p`
  color: red;
`;
