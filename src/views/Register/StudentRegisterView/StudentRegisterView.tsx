import React, { FormEvent, useState } from 'react';
import { Button } from '../../../components/common/Button/Button';
import { Form } from '../../../components/common/Form/Form';
import { Input } from '../../../components/common/Input/Input';
import { ForgotPassword } from '../../../components/common/ForgotPassword/ForgotPassword';
import { validateEmail } from '../../../utils/functions/validateEmail';
import { validatePassword } from '../../../utils/functions/validatePassword';
import './_LoginView.scss';

export const StudentRegisterView = () => {
    const [password, setPassword] = useState('');
    const [repatPassword, setRepatPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [login, setLogin] = useState('');

    const sendForm = (event: FormEvent) => {
        event.preventDefault();
        // Wstępna walidacja na frontendzie
        if ( validatePassword(password)) {
            // Wysyłanie zapytania na backend
        }
        // Zwrot komunikatu z informacją o błędnej waldiacji
    };

    return (
        <main className="view-LoginView">
            <img src={'/img/logo_MegaK.png'} alt={'Website logo'} />
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
                    value={setRepatPassword}
                    maxLength={60}
                />
                <div className={'validation-buttons'}>
                    <Button title={'Zarejestruj się'} />
                </div>
            </Form>
        </main>
    );
};

