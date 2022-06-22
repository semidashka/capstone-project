import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import { lightTheme, darkTheme } from '../styles/Themes';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

export default function App({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = () => {
    theme === lightTheme
      ? setCurrentTheme(darkTheme)
      : setCurrentTheme(lightTheme);
  };

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Header />
        <Main>
          <Component toggleTheme={toggleTheme} {...pageProps} />
        </Main>
        <Navbar />
      </ThemeProvider>
    </>
  );
}

const Main = styled.main`
  margin-top: 3.3rem;
`;
