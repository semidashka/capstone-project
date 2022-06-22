import styled, { css } from 'styled-components';
import Link from 'next/link';

export default function Navbar() {
  return (
    <StyledNavbar>
      <Link passHref href="/">
        <a>Home</a>
      </Link>
      <Link passHref href="/my-words">
        <a>My Words</a>
      </Link>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-around;
  ${props => css`
    color: ${props.theme.dark};
    background-color: ${props.theme.bright};
  `}
  padding: 0.2rem 0 0.6rem;
  list-style: none;
  font-size: 20px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  a {
    font-style: italic;
    font-size: 1.3rem;
  }
`;
