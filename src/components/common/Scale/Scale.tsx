import React from 'react';
import { Input } from '../Input/Input';

import './_Scale.scss';

interface Props {
  title: string;
}

export const Scale = ({ title }: Props) => {
  return (
    <div className="component-Scale">
      <p>{title}</p>
      <div className="scale-wrap">
        <Input
          placeholder={'np. 1000 zł '}
          type={'text'}
          name={''}
          title={'Od'}
        />
        <Input
          placeholder={'np. 10000 zł '}
          type={'text'}
          name={''}
          title={'Do'}
        />
      </div>
    </div>
  );
};
