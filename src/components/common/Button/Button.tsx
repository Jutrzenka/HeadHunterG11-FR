import React from 'react';
import './_Button.scss';

interface Props {
  title: string;
  toggle?: any;
  className?: string;
}

export const Button = ({ title, toggle, className }: Props) => {
  return toggle ? (
    <div className={'component-Button'}>
      <button className={className} onClick={() => toggle()}>
        {title}
      </button>
    </div>
  ) : (
    <div className={'component-Button'}>
      <button className={className}>{title}</button>
    </div>
  );
};
