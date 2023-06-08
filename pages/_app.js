import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import Head from "next/head";
//import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Thierno&lsquo;s Blog</title>
        <meta name="description" content="Thierno's Blog " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tmb.jpg" />
      </Head>
      <Layout> 
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
  );
}
