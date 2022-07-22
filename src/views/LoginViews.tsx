import React, { FormEvent, useState } from 'react';
import { Button } from '../components/common/Button/Button';
import { Form } from '../components/common/Form/Form';
import { Input } from '../components/common/Input/Input';

export const LoginViews = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendForm = (event: FormEvent) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <div className="App">
      <Form sendForm={sendForm}>
        <Input nameValue={'E-mail'} value={setEmail} />
        <Input nameValue={'Hasło'} value={setPassword} />
        <Button title={'Zaloguj się'} />
      </Form>
    </div>
  );
};
