import React, { useContext } from 'react';
import { Button } from '../Button/Button';
import { FormContext } from '../Form/Form';
import './_Select.scss';

interface Props {
  title: string;
  selects: string[];
  name: string;
  disabled?: boolean;
}

export const Select = ({ title, selects, name, disabled }: Props) => {
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
              disabled={disabled}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
