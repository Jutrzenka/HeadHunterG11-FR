import React from 'react';
import { Button } from '../Button/Button';
import './_Select.scss';

interface Props {
  title: string;
  selects: string[];
}

export const Select = ({ title, selects }: Props) => {
  return (
    <div className="selects">
      <p>{title}</p>
      <div className="select-wrap">
        {selects.map((item, index) => (
          <div className="select" key={index}>
            <Button title={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
