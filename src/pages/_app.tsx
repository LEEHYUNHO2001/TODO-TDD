import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';

import { reset } from '@/styles/Reset';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Global styles={reset} />
    <Component {...pageProps} />
  </>
);

export default MyApp;
