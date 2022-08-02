import React, { useEffect, useRef, useState } from 'react';
import './_Textarea.scss';

interface Props {
  nameValue: string;
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
  const activeSlideRef = useRef<HTMLTextAreaElement>(null);

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
        <br />
        <textarea
          ref={activeSlideRef}
          value={inputValue}
          onChange={(event) => {
            event.target.style.height = '40px';
            // event.target.style.height = `${event.target.scrollHeight}px`;
            setInputValue(event.target.value);
          }}
          onBlur={(event) => {
            if (event.target.value.trim() !== inputValue) {
              event.target.style.height = '40px';
            }
            setInputValue(event.target.value.trim());
          }}
        ></textarea>
      </label>
    </div>
  );
};
