import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import { useInput } from '@/hooks/useInput';

export default function Home() {
  const [input, setInput] = useInput('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch('/api/v1/enrichments')
      .then((data) => data.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
        <meta name="description" content="IP Address Tracker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <form onSubmit={handleSubmit}>
          <input onChange={setInput} type="text" placeholder="Enter domain or ip address" />
          <button type="submit">Submit</button>
        </form>
        {input}
      </main>
    </>
  );
}
