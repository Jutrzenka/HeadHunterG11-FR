import React, { FormEvent, useState } from 'react';
import { RootState } from '../../../redux/store';
import { Button } from '../../../components/common/Button/Button';
import { Form } from '../../../components/common/Form/Form';
import { Input } from '../../../components/common/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import './_HrRegisterView.scss';
import { HttpMethod, useFetch } from "../../../utils/hooks/useFetch";
import { ErrorView } from "../../ErrorView";


interface HRRegisterForm{
  email:string;
  password: string;
  confirmPassword: string,
  firstName: string,
  lastName: string,
  company: string,
}
const initErrors = {
    email:false,
    password:false,
    confirmPassword:false,
    firstName:false,
    lastName:false,
    company:false,
    confirm:false,
}
export const HrRegisterView = () => {
  const { login, registerCode } = useParams();
  const [data,status,fetchData] = useFetch();


   let errorsEdit = initErrors

  const fetched = status === 'fetched'

  // @ts-ignore
    const successRegister = fetched && data.success;


    // @ts-ignore
    const errorMessage = fetched && data.data.message;

    console.log(successRegister, errorMessage, 'po fetched test msg')

  const initForm = {
    email:'',
    password:'',
    confirmPassword:'',
    firstName:'',
    lastName:'',
    company:'',
  }

 const validateForm = (data: HRRegisterForm) => {
     if (data.email.length > 5 && data.email.includes('@')) {
         errorsEdit.email = true;
     }
     if (data.password === data.confirmPassword && data.confirmPassword.length > 1) {
         errorsEdit.confirmPassword = true;
     }
     if (data.password.length > 5) {
         errorsEdit.password = true;
     }
     if (data.firstName.length > 2) {
         errorsEdit.firstName = true;
     }
     if (data.lastName.length > 2) {
         errorsEdit.lastName = true;
     }
     if (data.company.length > 2) {
         errorsEdit.company = true;
     }
     if (errorsEdit.company && errorsEdit.lastName && errorsEdit.password && errorsEdit.confirmPassword && errorsEdit.email && errorsEdit.firstName) {
         errorsEdit.confirm = true;
     }
     if (errorsEdit.confirm) {
         if (data.email.length > 5 && data.password === data.confirmPassword && data.firstName.length > 1 && data.lastName.length > 2 && data.company.length > 2) {
             return true
         } else return false
     }
 }
 const sendForm = (data: HRRegisterForm) => {
    // Wstępna walidacja na frontendzie
    if(validateForm(data)){
      // @ts-ignore
      delete data.confirmPassword
      console.log(data, 'po delete')
      fetchData(`http://localhost:3001/api/auth/register/${login}/${registerCode}`,{
          method: HttpMethod.PATCH,
          headers: {'content-type': 'application/json;charset=UTF-8'},
          body: {data}});
      return;
    };
     alert(`
      Błąd!!!
      Formularz:
      ${!errorsEdit.email ? 'Email musi zawierać @ i być dłuższy niż 5 znaków' : ''}
      ${!errorsEdit.password   ?  'Hasło musi być dłuższye niż 5 znaków' : ''}
      ${!errorsEdit.confirmPassword ? 'Pole hasło i powtórz hasło muszą być takie same' : ''}
      Wszystkie pola muszą być wypełnione
      `)
     errorsEdit = initErrors
     return

    }



  if (status === 'idle') {
    return (
      <div className="hrRegister-view">
        <img
          className={'LoginViews_img'}
          src={'/img/logo_MegaK.png'}
          alt={'MegaK logo'}
        />
        <Form formInitialValues={initForm} functionToForm={sendForm}>
          <Input
            placeholder={'E-mail'}
            name={'email'}
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
            placeholder={'Nazwa firmy'}
            name={'company'}
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
            <Button title={'Zarejstruj się'} />
          </div>
        </Form>
      </div>
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
