import React, { FormEvent, useState } from 'react';
import { Button } from '../../../components/common/Button/Button';
import './_StudentRegisterView.scss';
import { HttpMethod, useFetch } from '../../../utils/hooks/useFetch';
import { Form } from "../../../components/common/Form/Form";
import { Input } from "../../../components/common/Input/Input";


export const StudentRegisterView = () => {
  const [send, setSend] = useState<boolean>(false);
  const [data, status, fetchData] = useFetch();

  const initForm ={
    password:'',
    confirmPassword:'',
    firstName:'',
    lastName:'',
    login:'',
  }


  const sendForm = (value:any) => {
    console.log(value)
      fetchData(``, {
        method: HttpMethod.POST,
        headers: { 'content-type': 'application/json;charset=UTF-8' },
        body: { value },
      });
      setSend(true);
    }



  if (!send) {
    return (
      <main className="view-LoginView">
        <img src={'/img/logo_MegaK.png'} alt={'Website logo'} />
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
              onClick={() => setSend(false)}
          >
            Zaloguj się!
          </a>
        </div>
      </div>
    );
  }
};
