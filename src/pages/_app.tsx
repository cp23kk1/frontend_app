import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import store from '@/store';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'swiper/css';
import 'swiper/css/pagination';
import { getPublicPath } from '@/utils/basePath';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VocaVerse',
  description: 'Guess word meaning game'
};

export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>VocaVerse</title>
        <link
          rel="icon"
          type="image/x-icon"
          href={getPublicPath('/icon/Logo.svg')}
        ></link>
      </Head>

      <Component {...pageProps} />
    </Provider>
  );
}
