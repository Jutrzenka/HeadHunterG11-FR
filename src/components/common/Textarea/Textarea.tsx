import React, { useContext, useEffect, useRef, useState } from 'react';
import './_Textarea.scss';
import { FormContext } from '../Form/Form';

interface Props {
  name: string;
  value?: any;
  nameValue?: string;
  title?: string;
  minLength?: number;
  maxLength?: number;
  maxHeight?: number;
  disabled?: boolean;
}

export const Textarea = ({
  name,
  nameValue,
  value,
  title,
  maxLength = 1000,
  maxHeight = 500,
  disabled,
}: Props) => {
  const formContext = useContext<any>(FormContext);
  const { form, handleFormChange } = formContext;
  const [inputValue, setInputValue] = useState(form[name]);
  const activeSlideRef = useRef<HTMLTextAreaElement>(null);
  const styleCss = {
    maxHeight: `${maxHeight}px`,
  };

  useEffect(() => {
    if (activeSlideRef.current != null) {
      const { scrollHeight } = activeSlideRef.current;
      activeSlideRef.current.style.height = `${scrollHeight}px`;
    }
  }, []);

  useEffect(() => {
    if (activeSlideRef.current != null) {
      const { scrollHeight, style } = activeSlideRef.current;
      style.height = `${scrollHeight}px`;
    }
    // handleFormChange;
  }, [inputValue]);

  return (
    <div className={`component-Textarea ${nameValue}`}>
      <label>
        {title && <p>{title}</p>}
        <textarea
          name={name}
          style={styleCss}
          maxLength={maxLength}
          ref={activeSlideRef}
          value={inputValue}
          disabled={disabled ? disabled : false}
          onChange={(event) => {
            event.target.style.height = '76px';
            handleFormChange(event);
            setInputValue(event.target.value);
          }}
          onBlur={(event) => {
            if (event.target.value.trim() !== inputValue) {
              event.target.style.height = '76px';
            }
            handleFormChange(event);
            setInputValue(event.target.value.trim());
          }}
        ></textarea>
      </label>
    </div>
  );
};
