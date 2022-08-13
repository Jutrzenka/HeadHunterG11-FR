import React, { ReactElement, useState } from 'react';
import './_Form.scss';

interface Props {
  children: ReactElement[];
  formInitialValues: {};
  functionToForm: any;
}

export const FormContext = React.createContext({
  form: {},
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => {},
});

export function Form({ children, formInitialValues, functionToForm }: Props) {
  const [form, setForm] = useState<any>(formInitialValues);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedForm = {
      ...form,
      [name]: value,
    };
    setForm(updatedForm);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (form !== formInitialValues) {
      console.log('Przeszło walidacje pora na wysłanie danych do backendu');
      functionToForm(form);
      setForm(formInitialValues);
      return;
    }
    console.log('nie udało sie wysłać danych');
  };
  return (
    <FormContext.Provider
      value={{
        form,
        handleFormChange,
      }}
    >
      <div>
        <form onSubmit={handleSubmit}>{children}</form>
      </div>
    </FormContext.Provider>
  );
}
