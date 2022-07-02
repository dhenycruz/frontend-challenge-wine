import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles } from '../themes/globalStyles';
import { Theme } from '../themes/themes';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Wine</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Titillium+Web:wght@200&display=swap" rel="stylesheet" />
    </Head>
    <Theme>
      <GlobalStyles />
      <Component {...pageProps} />
    </Theme>
  </>
);

export default MyApp;
