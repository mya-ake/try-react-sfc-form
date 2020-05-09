import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Try React SFC Form</title>
      </Head>

      <main className="container mx-auto">
        <h1>Hello</h1>
      </main>
    </>
  );
};

export default Home;
