import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/ui/layout';
import 'bulma';
import '../scss/main.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Sport Addict</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:ital,wght@0,400;0,600;0,700;1,700&display=swap'
          rel='stylesheet'
        />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
          key='viewport'
        />
        <meta
          name='description'
          content='Sport information and stats from your favorite teams or players'
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
