import React, { useState } from 'react';
import './_Input.scss';

type Type = 'text' | 'number' | 'password' | 'radio' | 'submit' | 'file';

interface Props {
  nameValue?: string;
  value: any;
  type: Type;
  title?: string;
  maxLength?: number;
  minLength?: number;
}

export const Input = ({
  nameValue,
  value,
  type,
  title,
  maxLength,
  minLength,
}: Props) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={'component-Input'}>
      <label>
        {title && <p>{title}</p>}
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
    </div>
  );
};
