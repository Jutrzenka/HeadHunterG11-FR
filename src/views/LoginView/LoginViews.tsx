import React, { FormEvent, useState } from 'react';
import { RootState } from '../../redux/store';
import { Button } from '../../components/common/Button/Button';
import { Form } from '../../components/common/Form/Form';
import { Input } from '../../components/common/Input/Input';
import { ForgotPassword } from '../../components/common/ForgotPassword/ForgotPassword';
import { useDispatch, useSelector } from 'react-redux';
import { validateEmail } from '../../utils/validateEmail';
import { validatePassword } from '../../utils/validatePassword';
import './_LoginView.scss';

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
    <div className="login-view">
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
    </div>
  );
};
