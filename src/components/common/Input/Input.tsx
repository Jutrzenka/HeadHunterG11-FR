import React, { useState } from 'react';
import './_Input.scss';

type Type = 'text' | 'number' | 'password' | 'radio';

interface Props {
  nameValue?: string;
  value: any;
  type: Type;
  title?: string;
  min?: number;
}

export const Input = ({ title, nameValue, value, type, min }: Props) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <label>
      {title && <p>{title}</p>}
      <input
        value={inputValue}
        type={type}
        placeholder={nameValue}
        min={min}
        onChange={(event) => {
          setInputValue(event.target.value);
          value(event.target.value);
        }}
      />
    </label>
  );
};
