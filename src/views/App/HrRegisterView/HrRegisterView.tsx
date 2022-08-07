import React, { FormEvent, useState } from 'react';
import { RootState } from '../../../redux/store';
import { Button } from '../../../components/common/Button/Button';
import { Form } from '../../../components/common/Form/Form';
import { Input } from '../../../components/common/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { validateEmail } from '../../../utils/validateEmail';
import { validatePassword } from '../../../utils/validatePassword';
import './_HrRegisterView.scss';
import { NavLink, useParams } from "react-router-dom";

export const HrRegisterView = () => {
  // global variable redux toolkit
  const { token, type } = useSelector((state: RootState) => state.token);
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [maxReservedStudents,setMaxReservedStudents] = useState<number>(10);
  const [sent, setSent] = useState<boolean>(false);


  const {login, registerCode} = useParams();
  // const [data,status,fetchData] = useFetch()
  // będzie można od komentować jak bedzie merg na deva

  const clear = () => {
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
    const form = {
      firstName,
      lastName,
      company,
      password,
      maxReservedStudents,
    }
    // Wstępna walidacja na frontendzie
    if (validateEmail(email) && validatePassword(password) && password === repeatPassword) {
      // Wysyłanie zapytania na backend
      // fetchData(``,{method: HttpMethod.POST, headers: {'content-type': 'application/json;charset=UTF-8'},body: {form}}
      setSent(true);
      clear();
      return
    }
    console.log(form)
    console.log(validateEmail(email),'email',email)
    console.log(validatePassword(password),'haslo',password)
    console.log(password === repeatPassword, 'czy haslo to haslo',password,repeatPassword)
    // Zwrot komunikatu z informacją o błędnej waldiacji
  };
if(!sent) {
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
            <Button title={'Zarejstruj się'}/>
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
        <NavLink className="done-link" to="/" onClick={()=> setSent(false)}>Zaloguj się!</NavLink>
        </div>
      </div>
  )
}
};