import React, { ReactElement } from 'react';
import './_Form.scss';

interface Props {
  sendForm: any;
  children: ReactElement[];
}

export const Form = ({ sendForm, children }: Props) => {
  return (
    <div className={'component-Form'}>
      <form onSubmit={sendForm}>{children}</form>
    </div>
  );
};
