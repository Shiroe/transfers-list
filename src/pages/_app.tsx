import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { MuseoModerno } from '@next/font/google';

const museo = MuseoModerno({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-museo: ${museo.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
