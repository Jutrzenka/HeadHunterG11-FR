import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Link } from 'react-router-dom';

import { Button } from '../components/common/Button/Button';
import { Form } from '../components/common/Form/Form';
import { Input } from '../components/common/Input/Input';
import { ForgotPassword } from '../components/common/ForgotPassword/ForgotPassword';

export const LoginViews = () => {
  // global variable redux toolkit
  const { token, type } = useSelector((state: RootState) => state.token);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendForm = (event: FormEvent) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <div className="App">
      <img src={'/logo_MegaK.png'} alt={'Website logo'} />
      <Form sendForm={sendForm}>
        <Input nameValue={'E-mail'} type={'text'} value={setEmail} />
        <Input nameValue={'Hasło'} type={'password'} value={setPassword} />
        <Link to={'/students'}>
          <Button title={'Zaloguj się'} />
        </Link>
      </Form>
      <ForgotPassword
        title={'Zapomniałeś hasła?'}
        email={email}
        url={'./recover'}
      />
    </div>
  );
};
