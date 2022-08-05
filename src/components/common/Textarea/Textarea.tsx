import React, { useEffect, useRef, useState } from 'react';
import './_Textarea.scss';

interface Props {
  value: any;
  nameValue?: string;
  title?: string;
  minLength?: number;
  maxLength?: number;
  maxHeight?: number;
  // lineHeightPX?: number;
}

export const Textarea = ({
  nameValue,
  value,
  title,
  maxLength = 1000,
  maxHeight = 500,
}: Props) => {
  const [inputValue, setInputValue] = useState(value);
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
  }, [inputValue]);

  return (
    <div className={'component-Textarea'}>
      <label>
        {title && <p>{title}</p>}
        <textarea
          style={styleCss}
          maxLength={maxLength}
          ref={activeSlideRef}
          value={inputValue}
          onChange={(event) => {
            event.target.style.height = '76px';
            setInputValue(event.target.value);
          }}
          onBlur={(event) => {
            if (event.target.value.trim() !== inputValue) {
              event.target.style.height = '76px';
            }
            setInputValue(event.target.value.trim());
          }}
        ></textarea>
      </label>
    </div>
  );
};
