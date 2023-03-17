import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import { useInput } from '@/hooks/useInput';

export default function Home() {
  const [input, setInput] = useInput('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          <input
            onChange={setInput}
            type="text"
            placeholder="Enter domain or ip address"
            // ref={ref}
          />
          <button type="submit">Submit</button>
        </form>
        {input}
      </main>
    </>
  );
}
