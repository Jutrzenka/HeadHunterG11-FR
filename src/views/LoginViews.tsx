import React, { FormEvent, useState } from 'react';
import { Button } from '../components/common/Button/Button';
import { Form } from '../components/common/Form/Form';
import { Input } from '../components/common/Input/Input';
import { ForgotPassword } from '../components/common/ForgotPassword/ForgotPassword';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { validateEmail } from '../utils/validateEmail';
import { validatePassword } from '../utils/validatePassword';

export const LoginViews = () => {
  // global variable redux toolkit
  const { token, type } = useSelector((state: RootState) => state.token);
  const dispatch = useDispatch();

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
    <div className="LoginViews">
      <img
        className={'LoginViews_img'}
        src={'/logo_MegaK.png'}
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
        <Button title={'Zaloguj się'} />
      </Form>
      <ForgotPassword
        title={'Zapomniałeś hasła?'}
        email={email}
        url={'./recover'}
      />
    </div>
  );
};
