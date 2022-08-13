import React, { FormEvent, useState } from "react";
import './_AdminImportCsv.scss';
import { Input } from "../../common/Input/Input";
import { Button } from "../../common/Button/Button";
import { Form } from "../../common/Form/Form";

export const AdminImportCsv = () => {
    const [file, setFile] = useState('');

    const sendForm = (event: FormEvent) => {
        console.log('send');
    };
    return(
        <div>
            <Form formInitialValues={file} functionToForm={sendForm}>
                <Input
                    placeholder={''}
                    name={''}
                    type={'file'}
                    value={setFile}
                    // Należy ustawić maxLength
                    maxLength={255}
                />
                <Button title={'Wybierz plik i dodaj'} />
            </Form>
        </div>
    )
}
