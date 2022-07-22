import React, { useState } from 'react';
import './_Input.scss';

type Type = 'text' | 'number' | 'password';

interface Props {
  nameValue: string;
  value: any;
  type: Type;
}

export const Input = ({ nameValue, value, type }: Props) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <label>
      <input
        value={inputValue}
        type={type}
        placeholder={nameValue}
        onChange={(event) => {
          setInputValue(event.target.value);
          value(event.target.value);
        }}
      />
    </label>
  );
};
