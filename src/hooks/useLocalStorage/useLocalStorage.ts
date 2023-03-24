import { useState } from 'react';

const useLocalStorage = (key: string, initialValue: string = '') => {
  const [value, storeValue] = useState<string>(() => {
    if (typeof window === 'undefined') return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      console.log(e);
      // send analytics here
      return initialValue;
    }
  });

  const setValue = (v: string) => {
    console.log(typeof v);
    try {
      // const item = v instanceof Function ? v(value) : v;
      storeValue(v);
      typeof window.localStorage !== 'undefined' && localStorage.setItem(key, v);
    } catch (e) {
      console.log(e);
      // send analytics here
    }
  };

  return [value, setValue];
};

export default useLocalStorage;
