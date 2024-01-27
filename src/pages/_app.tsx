import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import store from '@/store';
import { AppProps } from 'next/app';
import Head from 'next/head';

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
      </Head>

      <Component {...pageProps} />
    </Provider>
  );
}
