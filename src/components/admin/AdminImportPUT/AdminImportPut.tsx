import React from "react";
import './_AdminImportPut.scss';
import { Form } from "../../common/Form/Form";
import { Button } from "../../common/Button/Button";
import { Input } from "../../common/Input/Input";
import { HttpMethod, useFetch } from "../../../utils/hooks/useFetch";

interface AdminImportPutForm{
    email:string;
    role:string;
}

export const AdminImportPut = () => {
    const [data,status,fetchData] = useFetch();
    console.log(status,data)
const initForm = {
    email:'',
    role:'',
}
const sendForm = (data:AdminImportPutForm) => {
    if(data !== initForm) {
        fetchData(`http://localhost:3001/api/admin/create`,
            {method: HttpMethod.PUT,
                  headers: {'content-type': 'application/json;charset=UTF-8'},
                  body: {data}});
    }
};
    return(
        <div className="AdminImportPut-view">
            <Form formInitialValues={initForm} functionToForm={sendForm}>
                <Input
                placeholder={'E-mail'}
                name={'email'}
                type={'text'}
                maxLength={255}
                />
                <Input
                placeholder={'Rola'}
                name={'role'}
                type={"text"}
                maxLength={60}
                />
                <Button title={'Wyślij'}/>
            </Form>
        </div>
    )
}
