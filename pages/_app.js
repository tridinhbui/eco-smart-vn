import '@/styles/globals.css';
import '@/styles/navbar.css';
import '@/styles/home.css';
import '@/styles/contact.css';
import '@/styles/admin.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import Layout from '../components/layout/layout';
import React from 'react';
import Head from 'next/head';
import { config } from "@fortawesome/fontawesome-svg-core";
import 'tailwindcss/tailwind.css'
config.autoAddCss = false;
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Eco Smart Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo2.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
