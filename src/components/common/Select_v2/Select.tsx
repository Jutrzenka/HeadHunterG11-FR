import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { Button } from '../Button_v2/Button';
import './_Select.scss';
import { FormContext } from '../Form/Form';

interface Props {
  title: string;
  selects: string[];
  name: string;
}

export const Select = ({ title, selects, name }: Props) => {
  const formContext = useContext<any>(FormContext);
  const { form, handleFormChange } = formContext;

  return (
    <div className="component-Select">
      <p>{title}</p>
      <div className="select-wrap">
        {selects.map((item, index) => (
          <div
            className={form[name] === item ? 'select active' : 'select'}
            key={index}
          >
            <Button
              title={item}
              type={'button'}
              toggle={handleFormChange}
              value={item}
              name={name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
