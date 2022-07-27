import React from 'react';
import { Input } from '../Input/Input';

import './_Scale.scss';

interface Props {
  title: string;
}

export const Scale = ({ title }: Props) => {
  return (
    <div className="scale">
      <p>{title}</p>
      <div className="scale-wrap">
        <Input
          nameValue={'np. 1000 zł '}
          type={'text'}
          value={''}
          title={'Od'}
        />
        <Input
          nameValue={'np. 10000 zł '}
          type={'text'}
          value={''}
          title={'Do'}
        />
      </div>
    </div>
  );
};
