import React from 'react';
import { Input } from '../Input/Input';
import './_Radio.scss';

interface Props {
  title: string;
  selects: string[];
  name: string;
}

export const Radio = ({ title, selects, name }: Props) => {
  return (
    <div className="component-Radio">
      <p>{title}</p>
      <div className="radio-wrap">
        {selects.map((item, index) => (
          <div key={index}>
            <Input name={name} title={item} value={''} type={'radio'} />
            <Input title={item} name={''} type={'radio'} />
          </div>
        ))}
      </div>
    </div>
  );
};
