import React from 'react';

import './_Expectations.scss';

interface Props {
  description: string;
  value: string;
}

export const Expectations = ({ description, value }: Props) => {
  return (
    <div className={'component-Expectations'}>
      <div className="expectations-wrap">
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="value">{value}</div>
      </div>
    </div>
  );
};
