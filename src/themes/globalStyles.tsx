import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './themes';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  @font-face {
    font-family: 'Neo Sans';
    src: url('../../public/font/NeoSans.otf') format('otf');
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #F5F5F5;
    font-family: 'Titillium Web', sans-serif;
  }
`;
