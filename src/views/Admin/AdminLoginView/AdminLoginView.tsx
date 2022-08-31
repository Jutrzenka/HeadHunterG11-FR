import React from 'react';
import { Button } from '../../../components/common/Button/Button';
import { ForgotPassword } from '../../../components/common/ForgotPassword/ForgotPassword';
import { Form } from '../../../components/common/Form/Form';
import { Input } from '../../../components/common/Input/Input';
import './_AdminLoginView.scss';
import { HttpMethod, useFetch } from "../../../utils/hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setUser } from '../../../redux/slice/user';

interface AdminLoginForm{
  email:string;
  password:string;
}

export const AdminLoginView = () => {
  const { id, login, role } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const [data,status,fetchData] = useFetch();
  console.log(data,status)
  let navigate = useNavigate();
  if(status === 'fetched'){
    // tylko gdy skonczyło sie pobierać
    // tutaj data ma juz wartosc zwroconych danych
    navigate("../lists", {replace: true})
    console.log('ustawiam token')
  }

  const initForm = {
    email:'',
    password:'',
  }
  const sendForm = (data:AdminLoginForm) => {
    console.log(data,'wysylam admin login view')
    if(data.email !== '' && data.password !== ''){
      fetchData(`http://localhost:3001/api/admin/auth/login`,{
        method: HttpMethod.POST,
        headers: {'content-type': 'application/json;charset=UTF-8'},
        body: {data}
      })
      return;
    };
    return alert('Nie możesz zostawić mustego pola')

  };

  return (
    <main className={'view-AdminLoginView'}>
      <h1>{id}, {login}, {role}</h1>
      <button onClick={() => dispatch(setUser({id: "TEST", login: "TEST", role: "TEST"}))}>Zmiana</button>
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
