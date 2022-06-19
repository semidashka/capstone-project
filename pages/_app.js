import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import { lightTheme, darkTheme } from '../styles/Themes';

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
        <Component toggleTheme={toggleTheme} {...pageProps} />
      </ThemeProvider>
    </>
  );
}
