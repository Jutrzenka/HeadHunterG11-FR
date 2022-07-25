import React, { useState } from 'react';
import './_Input.scss';

type Type = 'text' | 'number' | 'password';

interface Props {
  nameValue: string;
  value: any;
  type: Type;
  maxLength?: number;
  minLength?: number;
}

export const Input = ({
  nameValue,
  value,
  type,
  maxLength,
  minLength,
}: Props) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <label>
      <input
        value={inputValue}
        type={type}
        maxLength={maxLength ? maxLength : 524288}
        minLength={minLength ? minLength : 0}
        placeholder={nameValue}
        onChange={(event) => {
          setInputValue(event.target.value.trimStart());
          value(event.target.value.trim());
        }}
      />
    </label>
  );
};
