import React, { useContext } from 'react';
import { Input } from '../Input/Input';
import './_Radio.scss';
import { FormContext } from '../Form/Form';

interface Props {
  title: string;
  selects: string[];
  name?: string;
  disabled?: boolean;
}

export const Radio = ({ title, selects, name = 'radio', disabled }: Props) => {
  const formContext = useContext<any>(FormContext);
  const { form, handleFormChange } = formContext;
  return (
    <div className="component-Radio">
      <p>{title}</p>
      <div className="radio-wrap">
        {selects.map((item, index) => (
          <div key={index}>
            <Input
              name={name ? name : ''}
              title={item}
              value={item}
              type={'radio'}
              disabled={disabled ? disabled : false}
              // checked={}
              // checked={console.log('weszło')}
            />
            {/*<Input title={item} name={''} type={'radio'} />*/}
          </div>
        ))}
      </div>
    </div>
  );
};
