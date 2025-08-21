import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
// Point to the existing global CSS inside app directory
import '../app/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
