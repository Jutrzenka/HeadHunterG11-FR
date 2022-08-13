import React from 'react';
import './_Button.scss';

interface Props {
  title: string;
  toggle?: any;
  className?: string;
  type?: 'submit' | 'button' | 'reset';
  name?: string;
  value?: string;
}

export const Button = ({
  title,
  toggle,
  className,
  type,
  name,
  value,
}: Props) => {
  return toggle ? (
    <div className={'component-Button'}>
      <button
        className={className}
        name={name}
        type={type ? type : 'submit'}
        onClick={toggle}
        value={value}
      >
        {title}
      </button>
    </div>
  ) : (
    <div className={'component-Button'}>
      <button className={className} type={type ? type : 'submit'}>
        {title}
      </button>
    </div>
  );
};
