// pages/_app.js
import '../styles/globals.css'; // Make sure your global styles are correctly imported
import Navbar from '../components/Navbar'; // Adjust the path as necessary
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Pircel Houses</title>
      <meta name="description" content="Pircel Houses" />
     <link rel="icon" href="/favicon.png" />
    </Head>
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
