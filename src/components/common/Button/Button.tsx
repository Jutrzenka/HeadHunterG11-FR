import React from 'react';
import './_Button.scss';

interface Props {
  title: string;
  toggle?: any;
}

export const Button = ({ title, toggle }: Props) => {
  return toggle ? (
    <button onClick={() => toggle()}>{title}</button>
  ) : (
    <button>{title}</button>
  );
};
