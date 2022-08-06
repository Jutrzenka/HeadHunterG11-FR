import React, { FormEvent, useState } from 'react';
import { Button } from '../../../components/common/Button/Button';
import { Form } from '../../../components/common/Form/Form';
import { Input } from '../../../components/common/Input/Input';
import { validatePassword } from '../../../utils/functions/validatePassword';
import './_StudentRegisterView.scss';
import { HttpMethod, useFetch } from "../../../utils/useFetch";

export const StudentRegisterView = () => {
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [sent,setSent] = useState<boolean>(false);

    const [data,status,fetchData] = useFetch()

    const clear = () => {
        setPassword('');
        setRepeatPassword('');
        setFirstName('');
        setLastName('');
        setLogin('');

    }

    const sendForm = (event: FormEvent) => {
        event.preventDefault();
        const form = {
            firstName,
            lastName,
            login,
            password
        }
        // Wstępna walidacja na frontendzie
        if ( validatePassword(password) && password === repeatPassword) {
            console.log(form)
            fetchData(``,{method: HttpMethod.POST, headers: {'content-type': 'application/json;charset=UTF-8'},body: {form}})
            setSent(true);
            clear();
            // Wysyłanie zapytania na backend
        }
        // Zwrot komunikatu z informacją o błędnej waldiacji
        console.log(form)

    };

    if(!sent) {
        return (
            <main className="view-LoginView">
                <img src={'/img/logo_MegaK.png'} alt={'Website logo'}/>
                <Form sendForm={sendForm}>
                    <Input
                        nameValue={'Login'}
                        type={'text'}
                        value={setLogin}
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
                        <Button title={'Zarejestruj się'}/>
                    </div>
                </Form>
            </main>
        );
    }else  {
        return (
            <div className="hrRegister-view">
                <div className="hrRegister-done">
                    <img
                        className={'LoginViews_img'}
                        src={'/img/logo_MegaK.png'}
                        alt={'Website logo'}
                    />
                    <h2 className="done-title">Udało się zarejsetrować!</h2>
                    <a className="done-link" href="http://localhost:3000" onClick={()=> setSent(false)}>Zaloguj się!</a>
                </div>
            </div>
        )
    }
};

