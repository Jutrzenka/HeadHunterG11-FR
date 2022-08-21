import React, { FormEvent } from "react";
import { Button } from "../../common/Button/Button";
import './_AdminImportJson.scss';


export const AdminImportJson = () => {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // @ts-ignore
        const formData = new FormData(e.target);
        fetch(`http://localhost:3001/api/admin/create/json`,{
            method:"PUT",
            body:formData,
        })
            .then((respone) => {
                respone.text()
                    .then((text) => console.log(text));
            })
            .catch((error) => {
                console.error('File upload error!');
            });
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" name="my-file"/>
                <Button title={'Wybierz plik i dodaj'} />
            </form>
        </div>
    )
}
