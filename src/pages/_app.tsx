import type { AppProps } from 'next/app';
import { GlobalStyles } from '../themes/globalStyles';
import { Theme } from '../themes/themes';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Theme>
    <GlobalStyles />
    <Component {...pageProps} />
  </Theme>
);

export default MyApp;
