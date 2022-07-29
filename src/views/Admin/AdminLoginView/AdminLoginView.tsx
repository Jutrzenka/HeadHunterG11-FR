import React, { FormEvent, useState } from 'react';
import { validateEmail } from '../../../utils/functions/validateEmail';
import { validatePassword } from '../../../utils/functions/validatePassword';
import { Button } from '../../../components/common/Button/Button';
import { ForgotPassword } from '../../../components/common/ForgotPassword/ForgotPassword';
import { Form } from '../../../components/common/Form/Form';
import { Input } from '../../../components/common/Input/Input';
import './_AdminLoginView.scss';

export const AdminLoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendForm = (event: FormEvent) => {
    event.preventDefault();
    // Wstępna walidacja na frontendzie
    if (validateEmail(email) && validatePassword(password)) {
      // Wysyłanie zapytania na backend
    }
    // Zwrot komunikatu z informacją o błędnej waldiacji
  };

  return (
    <main className={'view-AdminLoginView'}>
      <img
        className={'LoginViews_img'}
        src={'/img/logo_MegaK.png'}
        alt={'Website logo'}
      />
      <Form sendForm={sendForm}>
        <Input
          nameValue={'E-mail'}
          type={'text'}
          value={setEmail}
          maxLength={255}
        />
        <Input
          nameValue={'Hasło'}
          type={'password'}
          value={setPassword}
          maxLength={60}
        />
        <div className={'validation-buttons'}>
          <ForgotPassword
            title={'Zapomniałeś hasła?'}
            email={email}
            url={'./recover'}
          />
          <Button title={'Zaloguj się'} />
        </div>
      </Form>
    </main>
  );
};
