import { useState } from 'react';

export function useToggle(initialValue = false): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initialValue);
  const toggleValue = () => setValue((prevState) => !prevState);
  return [value, toggleValue];
}
