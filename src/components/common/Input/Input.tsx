import React, { useState } from 'react';
import './_Input.scss';

interface Props {
  nameValue: string;
  value: any;
}

export const Input = ({ nameValue, value }: Props) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <label>
      <input
        value={inputValue}
        placeholder={nameValue}
        onChange={(event) => {
          setInputValue(event.target.value);
          value(event.target.value);
        }}
      />
    </label>
  );
};
