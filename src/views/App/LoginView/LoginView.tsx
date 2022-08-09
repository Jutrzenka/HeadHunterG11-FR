import React, { FormEvent, useState } from 'react';
import { Button } from '../../../components/common/Button/Button';
import { ForgotPassword } from '../../../components/common/ForgotPassword/ForgotPassword';
import { Form } from "../../../components/common/Form/Form";
import { Input } from "../../../components/common/Input/Input";
import './_LoginView.scss';

export const LoginView = () => {
  const initForm = {
    email:'',
    password:'',
  }

  const sendForm = (value:any) => {
    // value to wartość przesyłana z formularza
    console.log(value)
  }

  return (
    <main className="view-LoginView">
      <img src={'/img/logo_MegaK.png'} alt={'Website logo'} />
      <Form formInitialValues={initForm} functionToForm={sendForm}>
        <Input
          name={'email'}
          type={'text'}
          placeholder={'E-mail'}
          maxLength={255}
        />
        <Input
          name={'password'}
          type={'password'}
          placeholder={'Hasło'}
          maxLength={60}
        />
        <div className={'validation-buttons'}>
          <ForgotPassword
            title={'Zapomniałeś hasła?'}
            email={''}
            url={'./recover'}
          />
          <Button title={'Zaloguj się'} />
        </div>
      </Form>
    </main>
  );
};
