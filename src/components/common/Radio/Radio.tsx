import React from 'react';
import { Input } from '../Input/Input';
import './_Radio.scss';

interface Props {
  title: string;
  selects: string[];
}

export const Radio = ({ title, selects }: Props) => {
  return (
    <div className="component-Radio">
      <p>{title}</p>
      <div className="radio-wrap">
        {selects.map((item, index) => (
          <div key={index}>
            <Input title={item} name={''} type={'radio'} />
          </div>
        ))}
      </div>
    </div>
  );
};
