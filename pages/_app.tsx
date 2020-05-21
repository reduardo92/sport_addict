import { AppProps } from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import SportProvider from '../components/context/SportsData/SportProvider';
import Layout from '../components/ui/layout';
import 'bulma';
import '../scss/main.scss';
import axios from 'axios';
import Router from 'next/dist/client/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

// Add Loading Animated bar on top of the page
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

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
      <SWRConfig
        value={{
          fetcher: async (...url: string[]) =>
            await axios
              .all(url.map(async (item) => await axios.get(item)))
              .then((item) => item.flatMap(({ data }) => Object.values(data))),
        }}
      >
        <SportProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SportProvider>
      </SWRConfig>
    </>
  );
};

export default MyApp;
