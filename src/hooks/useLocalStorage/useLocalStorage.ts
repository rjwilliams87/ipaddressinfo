import { useState } from 'react';

const useLocalStorage = (key: string, initialValue: string): [string, (v: string) => void] => {
  const [value, storeValue] = useState<string>(() => {
    if (typeof window === 'undefined') return initialValue;

    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      console.log(e);
      // send analytics
      return initialValue;
    }
  });

  const setValue = (v: string | ((v: string) => string)) => {
    console.log(typeof v);
    try {
      const item = v instanceof Function ? v(value) : v;
      storeValue(item);
      typeof window.localStorage !== 'undefined' && localStorage.setItem(key, item);
    } catch (e) {
      console.log(e);
      // send analytics here
    }
  };

  return [value, setValue];
};

export default useLocalStorage;
