import React, { useState } from 'react';
import { Button } from '../../../components/common/Button/Button';
import './_StudentRegisterView.scss';
import { HttpMethod, useFetch } from '../../../utils/hooks/useFetch';
import { Form } from "../../../components/common/Form/Form";
import { Input } from "../../../components/common/Input/Input";
import { useParams } from "react-router-dom";
import { ErrorView } from "../../ErrorView";


interface StudentRegisterForm{
  login:string;
  password: string;
  confirmPassword: string,
  firstName: string,
  lastName: string
}
const initErrors = {
  login:false,
  password:false,
  confirmPassword:false,
  firstName:false,
  lastName:false,
  confirm:false,
}

export const StudentRegisterView = () => {
  const { login, registerCode } = useParams();
  const [data, status, fetchData] = useFetch();

  let errorsEdit = initErrors;

  const fetched = status === 'fetched';

  // @ts-ignore
  const successRegister = fetched && data.success;

  // @ts-ignore
  const errorMessage = fetched && data.data.message;

  const initForm ={
    password:'',
    confirmPassword:'',
    firstName:'',
    lastName:'',
    login:'',
  }

  const validateForm = (data: StudentRegisterForm) => {
    if(data.login.length > 5 ){
      errorsEdit.login = true;
    }
    if(data.confirmPassword === data.password && data.confirmPassword.length > 2){
      errorsEdit.confirmPassword = true;
    }
    if(data.password.length > 5){
      errorsEdit.password = true;
    }
    if(data.firstName.length > 2){
      errorsEdit.firstName = true;
    }
    if(data.lastName.length > 2){
      errorsEdit.lastName = true;
    }
    if(errorsEdit.lastName && errorsEdit.password && errorsEdit.confirmPassword && errorsEdit.login && errorsEdit.firstName){
      errorsEdit.confirm = true;
    }
    if (errorsEdit.confirm){
      return true
    } else return false
  }

  const sendForm = (data: StudentRegisterForm) => {
    if(validateForm(data)){
      // @ts-ignore
      delete data.confirmPassword
      fetchData(`http://localhost:3001/api/auth/register/${login}/${registerCode}`, {
        method: HttpMethod.PATCH,
        headers: { 'content-type': 'application/json;charset=UTF-8' },
        body: { data },
      });
      return
    };
    alert(`
      Błąd!!!
      Formularz:
      ${!errorsEdit.login ? 'Login musi być dłuższy niż 5 znaków' : ''}
      ${!errorsEdit.password   ?  'Hasło musi być dłuższye niż 5 znaków' : ''}
      ${!errorsEdit.confirmPassword ? 'Pole hasło i powtórz hasło muszą być takie same' : ''}
      Wszystkie pola muszą być wypełnione
      `)
    errorsEdit = initErrors
    return

    }

  if (status === 'idle') {
    return (
      <main className="view-LoginView">
        <img src={'/img/logo_MegaK.png'} alt={'MegaK logo'} />
        <Form formInitialValues={initForm} functionToForm={sendForm}>
          <Input
            placeholder={'Login'}
            name={'login'}
            type={'text'}
            maxLength={255}
          />
          <Input
            placeholder={'Imię'}
            name={'firstName'}
            type={'text'}
            maxLength={60}
          />
          <Input
            placeholder={'Nazwisko'}
            name={'lastName'}
            type={'text'}
            maxLength={60}
          />
          <Input
            placeholder={'Hasło'}
            name={'password'}
            type={'password'}
            maxLength={60}
          />
          <Input
            placeholder={'Powtórz hasło'}
            name={'confirmPassword'}
            type={'password'}
            maxLength={60}
          />
          <div className={'validation-buttons'}>
            <Button title={'Zarejestruj się'} />
          </div>
        </Form>
      </main>
    );
  } else if (successRegister) {
    return (
      <div className="hrRegister-view">
        <div className="hrRegister-done">
          <img
            className={'LoginViews_img'}
            src={'/img/logo_MegaK.png'}
            alt={'Website logo'}
          />
          <h2 className="done-title">Udało się zarejsetrować!</h2>
          <a
              className="done-link"
              href="http://localhost:3000"
          >
            Zaloguj się!
          </a>
        </div>
      </div>
    );
  } else {
    return(
        <div>
          <ErrorView message={errorMessage}/>
        </div>
    )}
};
