import React, { useState } from 'react';
import './_Textarea.scss';

interface Props {
  nameValue?: string;
  value: any;
  title?: string;
  maxLength?: number;
  minLength?: number;
}

export const Textarea = ({
  nameValue,
  value,
  title,
  maxLength,
  minLength,
}: Props) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <div className={'component-Textarea'}>
      <label>
        {title && <p>{title}</p>}
        <textarea
          value={inputValue}
          placeholder={nameValue}
          onChange={(event) => {
            setInputValue(event.target.value.trimStart());
            value(event.target.value.trim());
          }}
        ></textarea>
      </label>
    </div>
  );
};
