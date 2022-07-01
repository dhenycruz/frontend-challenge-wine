import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './themes';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
  }
`;
