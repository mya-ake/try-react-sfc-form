import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Home: NextPage = () => {
  /** imports */
  const Content = dynamic(() => import('~/components/content/FormContent'), {
    ssr: false,
  });

  /** view */
  return (
    <>
      <Head>
        <title>Try React SFC Form</title>
      </Head>

      <header className="container mx-auto p-3">
        <h1 className="text-2xl">Forms</h1>
      </header>

      <main className="container mx-auto">
        <Content></Content>
      </main>
    </>
  );
};

export default Home;
