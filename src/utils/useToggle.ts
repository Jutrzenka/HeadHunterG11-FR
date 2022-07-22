import { useCallback, useState } from 'react';

export function useToggle(initialState = false) {
  const [value, setValue] = useState(initialState);

  const toggle = useCallback(() => setValue((v) => !v), []);

  return [value, toggle];
}
