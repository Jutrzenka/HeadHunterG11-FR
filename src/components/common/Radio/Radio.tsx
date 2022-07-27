import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import './_Radio.scss';

interface Props {
  title: string;
  selects: string[];
}

export const Radio = ({ title, selects }: Props) => {
  return (
    <div className="radios">
      <p>{title}</p>
      <div className="radio-wrap">
        {selects.map((item, index) => (
          <div key={index}>
            <Input title={item} value={''} type={'radio'} />
          </div>
        ))}
      </div>
    </div>
  );
};
