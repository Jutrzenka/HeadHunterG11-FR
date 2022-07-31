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
  const [textAreaHeight, setTextAreaHeight] = useState({
    height: 'auto',
  });
  const activeSlideRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (activeSlideRef.current != null) {
      const { scrollHeight } = activeSlideRef.current;

      setTextAreaHeight({
        height: `${scrollHeight}px`,
      });
    }
  }, []);

  return (
    <div className={'component-Textarea'}>
      <label>
        {title && <p>{title}</p>}
        <textarea
          ref={activeSlideRef}
          style={textAreaHeight}
          value={inputValue}
          onChange={(event) => {
            // setTextAreaHeight((prev) => ({
            //   ...prev,
            //   height: `40px`,
            // }));
            // event.target.style.height = '40px';

            // setTextAreaHeight(
            //   {
            //     height: `40px`,
            // },
            // () => {
            //   setTextAreaHeight({
            //     height: `${event.target.scrollHeight}px`,
            //   });
            // },
            // );

            setTextAreaHeight({
              height: `${event.target.scrollHeight}px`,
            });

            setInputValue(event.target.value.trimStart());
            // value(event.target.value.trim());
          }}
        ></textarea>
      </label>
    </div>
  );
};
