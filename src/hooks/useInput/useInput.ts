import { useState } from 'react';

export default function useInput(
  initialValue: string = '',
): [string, (event: React.ChangeEvent<HTMLInputElement>) => void] {
  const [input, _setInput] = useState<string>(initialValue);

  const setInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    _setInput(event.target.value);
  };

  return [input, setInput];
}
