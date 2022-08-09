import React, { FormEvent, useState } from 'react';
import { validateEmail } from '../../../utils/functions/validateEmail';
import { validatePassword } from '../../../utils/functions/validatePassword';
import { Button } from '../../../components/common/Button/Button';
import { ForgotPassword } from '../../../components/common/ForgotPassword/ForgotPassword';
import { Form } from '../../../components/common/Form/Form';
import { Input } from '../../../components/common/Input/Input';
import './_AdminLoginView.scss';

export const AdminLoginView = () => {

  const initForm = {
    email:'',
    password:'',
  }
  const sendForm = (event: FormEvent) => {
    console.log('wysylam admin login view')
    // Wstępna walidacja na frontendzie
    // Zwrot komunikatu z informacją o błędnej waldiacji
  };

  return (
    <main className={'view-AdminLoginView'}>
      <img src={'/img/logo_MegaK.png'} alt={'Website logo'} />
      <Form formInitialValues={initForm} functionToForm={sendForm}>
        <Input
          placeholder={'E-mail'}
          name={'email'}
          type={'text'}
          maxLength={255}
        />
        <Input
          placeholder={'Hasło'}
          name={'password'}
          type={'password'}
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
