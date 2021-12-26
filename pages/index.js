import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Navbar } from '../components/navbar';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className="page-container">
      <Head>
          <title>Home - Naufal Akbar Nugroho</title>
          <meta
            name="description"
            content="Welcome to Next.js News App by Naufal Akbar Nugroho"
          />

          <meta property="og:title" content="About Me - Naufal Akbar Nugroho" />
          <meta
            property="og:description"
            content="Welcome to Next.js News App by Naufal Akbar Nugroho"
          />

          <meta property="twitter:title" content="About Me - Naufal Akbar Nugroho" />
          <meta
            property="twitter:description"
            content="Welcome to Next.js News App by Naufal Akbar Nugroho"
          />
      </Head>
      <Navbar />
      <div className={styles.main}>
        <h1>Next.js News App</h1>

        <h3>Welcome to Next.js News App by <a href='https://naufalakbar.me' target='_blank' className={styles.link} rel="noreferrer">Naufal Akbar Nugroho</a>.</h3>
      </div>
      <Footer />
    </div>
  );
}