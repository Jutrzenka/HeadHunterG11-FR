import React, { FormEvent, useState } from 'react';
import { RootState } from '../../../redux/store';
import { Button } from '../../../components/common/Button/Button';
import { Form } from '../../../components/common/Form/Form';
import { Input } from '../../../components/common/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { validateEmail } from '../../../utils/validateEmail';
import { validatePassword } from '../../../utils/validatePassword';
import './_HrRegisterView.scss';

export const HrRegisterView = () => {
  // global variable redux toolkit
  const { token, type } = useSelector((state: RootState) => state.token);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('')
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [maxReservedStudents,setMaxReservedStudents] = useState(10);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
    setRepeatPassword('');
    setFirstName('');
    setLastName('');
    setCompany('');
    setMaxReservedStudents(10);
  }

  const sendForm = (event: FormEvent) => {
    event.preventDefault();
    // Wstępna walidacja na frontendzie
    if (validateEmail(email) && validatePassword(password)) {
      // Wysyłanie zapytania na backend
    }
    console.log(firstName,lastName,company,maxReservedStudents,email,password,repeatPassword)
    // Zwrot komunikatu z informacją o błędnej waldiacji
  };

  return (
      <div className="hrRegister-view">
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
              nameValue={'Imię'}
              type={'text'}
              value={setFirstName}
              maxLength={60}
          />
            <Input
                nameValue={'Nazwisko'}
                type={'text'}
                value={setLastName}
                maxLength={60}
            />
            <Input
                nameValue={'Nazwa firmy'}
                type={'text'}
                value={setCompany}
                maxLength={60}
            />
            <Input
                nameValue={'Liczba osób do rozmowy'}
                type={'number'}
                value={setMaxReservedStudents}
                maxLength={3}
            />
            <Input
                nameValue={'Hasło'}
                type={'password'}
                value={setPassword}
                maxLength={60}
            />
          <Input
              nameValue={'Powtórz hasło'}
              type={'password'}
              value={setRepeatPassword}
              maxLength={60}
          />
          <div className={'validation-buttons'}>
            <Button title={'Zarejstruj się'} />
          </div>
        </Form>
      </div>
  );
};
