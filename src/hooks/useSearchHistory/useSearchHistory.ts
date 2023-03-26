import { useMemo } from 'react';

import { useLocalStorage } from '../useLocalStorage';

const STORAGE_REF = 'iplookup:recent_search';
const MAX_STORE_ITEMS = 10;

const isString = (value: any) => typeof value === 'string';

const parseSearchHistory = (storageItem: string): string[] => {
  try {
    const item = JSON.parse(storageItem);
    if (Array.isArray(item)) return item.filter(isString);
    return [];
  } catch (e) {
    // send analytics here
    return [];
  }
};

const useSearchHistory = (): [string[], (v: string) => void] => {
  const [storage, setStorage] = useLocalStorage(STORAGE_REF, JSON.stringify([]));

  const searchHistory = useMemo(() => parseSearchHistory(storage), [storage]);

  const storeSearch = (value: string) => {
    !searchHistory.includes(value) &&
      setStorage(JSON.stringify([value, ...searchHistory].slice(0, MAX_STORE_ITEMS)));
  };

  return [searchHistory, storeSearch];
};

export default useSearchHistory;
