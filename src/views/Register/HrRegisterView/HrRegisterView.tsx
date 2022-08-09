import React, { FormEvent, useState } from 'react';
import { RootState } from '../../../redux/store';
import { Button } from '../../../components/common/Button/Button';
import { Form } from '../../../components/common/Form/Form';
import { Input } from '../../../components/common/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import './_HrRegisterView.scss';
import { useFetch } from "../../../utils/hooks/useFetch";

export const HrRegisterView = () => {
  // global variable redux toolkit
  const { token, type } = useSelector((state: RootState) => state.token);
  const dispatch = useDispatch();

  const [sent, setSent] = useState<boolean>(false);

  const { login, registerCode } = useParams();
  const [data,status,fetchData] = useFetch();

  const initForm = {
    email:'',
    password:'',
    confirmPassword:'',
    firstName:'',
    lastName:'',
    company:'',
  }




  const sendForm = (event: FormEvent) => {
    // Wstępna walidacja na frontendzie
      // Wysyłanie zapytania na backend
      // fetchData(``,{method: HttpMethod.POST, headers: {'content-type': 'application/json;charset=UTF-8'},body: {form}}
      setSent(true);
      return;
    }



  if (!sent) {
    return (
      <div className="hrRegister-view">
        <img
          className={'LoginViews_img'}
          src={'/img/logo_MegaK.png'}
          alt={'Website logo'}
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
  } else {
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
              onClick={() => setSent(false)}
          >
            Zaloguj się!
          </a>
        </div>
      </div>
    );
  }
};
