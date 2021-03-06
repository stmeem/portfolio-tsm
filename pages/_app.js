import Head from "next/head";
import '../styles/globals.css'
import Layout from '../components/Layout'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";


config.autoAddCss = false;



function MyApp({ Component, pageProps }) {
  return(
    
  <Layout>
    <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="/images/android-chrome-192x192.png"/>

</Head>

   <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
