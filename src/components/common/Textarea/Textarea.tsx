import React, { useEffect, useState } from 'react';
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
  // const textArea = document.querySelector(`.${nameValue}`).innerHTML;
  // const textArea = document.querySelector(`.elo`);

  // useEffect(() => {
  // setInputValue(textArea);
  // console.log(textArea);
  // }, [textArea]);
  return (
    <div className={'component-Textarea'}>
      <label>
        {title && <p>{title}</p>}
        {/*<p*/}
        {/*className={nameValue}*/}
        {/*className={'elo'}*/}
        {/*role={'textbox'}*/}
        {/*contentEditable*/}
        {/*value={inputValue}*/}
        {/*onChange={(e) => {*/}
        {/* console.log(e.textContent); */}
        {/*setInputValue(event.target.value.trimStart()); */}
        {/*value(event.target.value.trim());*/}
        {/*>*/}
        {/*{inputValue}*/}
        {/*<span ></span>*/}
        {/*</p>*/}
        <textarea
          // placeholder={nameValue}
          value={inputValue}
          onChange={(event) => {
            event.target.style.height = `${event.target.scrollHeight}px`;
            setInputValue(event.target.value.trimStart());
            value(event.target.value.trim());
          }}
        ></textarea>
      </label>
    </div>
  );
};
