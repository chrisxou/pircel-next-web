// pages/_app.js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Head from "next/head";

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
