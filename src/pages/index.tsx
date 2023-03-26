import { useState } from 'react';
import Head from 'next/head';

import FlyOut from '@/components/FlyOut';
import { useAddressDispatch } from '@/context/address';
import { useSearchHistory } from '@/hooks/useSearchHistory';

export default function Home() {
  const dispatch = useAddressDispatch();
  const [state, setState] = useState<string>('');
  const [searchHistory, storeSearch] = useSearchHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: 'SET_ADDRESS', payload: state });
    storeSearch(state);
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
          <FlyOut changeHandler={setState}>
            <FlyOut.Input type="text" placeholder="Enter domain or ip address" />
            <button type="submit">Submit</button>
            <FlyOut.List>
              {searchHistory.map(
                (value) =>
                  typeof value === 'string' && (
                    <FlyOut.ListItem key={value} value={value}>
                      {value}
                    </FlyOut.ListItem>
                  ),
              )}
            </FlyOut.List>
          </FlyOut>
        </form>
      </main>
    </>
  );
}
