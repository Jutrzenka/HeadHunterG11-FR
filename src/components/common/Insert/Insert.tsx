import React from 'react';
import { Input } from '../Input/Input';
import './_Insert.scss';

interface Props {
  title: string;
}

export const Insert = ({ title }: Props) => {
  return (
    <div className="component-Insert-radios">
      <p>{title}</p>
      <div className="radio-wrap">
        <Input
          value={''}
          type={'number'}
          nameValue={'0 miesięcy'}
          minLength={0}
        />
      </div>
    </div>
  );
};
