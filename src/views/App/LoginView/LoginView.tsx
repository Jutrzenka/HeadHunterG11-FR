import React, { FormEvent, useEffect, useState } from 'react';
import { Button } from '../../../components/common/Button/Button';
import { ForgotPassword } from '../../../components/common/ForgotPassword/ForgotPassword';
import { Form } from "../../../components/common/Form/Form";
import { Input } from "../../../components/common/Input/Input";
import './_LoginView.scss';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { HttpMethod, useFetch } from "../../../utils/hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { ElementData } from "../../../utils/types/JsonCommunicationType";
import { setUser } from "../../../redux/slice/user";

export const LoginView = () => {
  const { id, login, role } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const [data,status,fetchData] = useFetch();
  let navigate = useNavigate();

  const initForm = {
    email:'',
    password:'',
  }

  useEffect(()=>{
    console.log(data)
    if(data !== undefined && data.success){
      const {id,role,login} = (data.data as ElementData).value
      dispatch(setUser({
        id,
        login,
        role,
      }))
      navigate(`${role === 'students' ? '../cv' : '../students'}`, {replace: true})
      console.log('ustawiam token')
    }
  },[data])

  const sendForm = (form:any) => {
    console.log(form,'wysylam admin login view')
    if(form.email !== '' && form.password !== ''){
      fetchData(`http://localhost:3001/api/auth/login`,{
        method: HttpMethod.POST,
        headers: {
          'content-type': 'application/json;charset=UTF-8'},
        body: {
          login: form.email,
          pwd: form.password,
        }
      })
      return;
    };
    return alert('Nie możesz zostawić mustego pola')
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
