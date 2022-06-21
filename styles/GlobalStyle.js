import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color: rgb(25, 25, 25);
    --button-background: ${({ theme }) => theme.buttonbg};
    --background-color: ${({ theme }) => theme.bodybg};
    --border-radius: 7px;
  }
  
  * {
  box-sizing: border-box;
}

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--background-color);
    font-family: 'Prompt';
  }

  a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyle;
