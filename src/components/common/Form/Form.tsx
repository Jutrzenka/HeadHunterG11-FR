import React, { ReactElement } from 'react';
import './_Form.scss';

interface Props {
  sendForm: any;
  children: ReactElement[];
}

export const Form = ({ sendForm, children }: Props) => {
  return (
    <form className="Form-common" onSubmit={sendForm}>
      {children}
    </form>
  );
};
