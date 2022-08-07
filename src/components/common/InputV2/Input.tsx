import React, { useState } from 'react';
import './_Input.scss';

type Type = 'text' | 'number' | 'password' | 'radio';

interface Props {
  nameValue?: string;
  value: any;
  type: Type;
  min?: number;
  title?: string;
  maxLength?: number;
  minLength?: number;
}

export const Input = ({
  nameValue,
  value,
  type,
  min,
  title,
  maxLength,
  minLength,
}: Props) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <div className={'component-Input'}>
      <label>
        {title && <p>{title}</p>}
        <input
          value={inputValue}
          type={type}
          min={min ? min : 0}
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
