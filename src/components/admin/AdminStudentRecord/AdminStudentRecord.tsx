import React, { useState } from 'react';
import { useToggle } from '../../../utils/hooks/useToggle';

import { Button } from '../../common/Button/Button';
import './_AdminStudentRecord.scss';
import { Form } from "../../common/Form/Form";
import { Input } from '../../common/Input/Input';
import { HttpMethod, useFetch } from "../../../utils/hooks/useFetch";

interface Props {
  activeAccount: boolean;
  email: string;
  idUser: string;
  login: string;
  role: string
}

export const AdminStudentRecord = ({activeAccount,email,idUser,login,role}:Props) => {
  const [value, toggle] = useToggle(true);
  const [editMode,setEditMode] = useState(false)
  const [data,status,fetchData] = useFetch();
  const dataFromProps = {idUser,role}


  const sendUpdate = (data:string) => {
    if(data !==email){
    fetchData(`http://localhost:3001/api/admin/user/${idUser}`,
        {method: HttpMethod.PATCH,
              headers: {'content-type': 'application/json;charset=UTF-8'},
              body: {data}});
    setEditMode(false)
    return;
    }
  }

  const deleteRecord = () => {
    fetchData(`http://localhost:3001/api/admin/user/${idUser}`,
        {method: HttpMethod.DELETE,
          headers: {'content-type': 'application/json;charset=UTF-8'},
          body: {}});
    console.log('usówam', idUser);
    return;
  }

  const edit = <Form formInitialValues={{email:email}} functionToForm={sendUpdate}>
    <Input
        name={'email'}
        type={'text'}
        maxLength={255}
    />
    <Button title={'Zapisz'} />
  </Form>

  return (
    <div className={'component-AdminStudentRecord'}>
      <div className="top-wrap">
        <div className="user-name-wrap">
          <p>{login}</p>
          {!editMode ? <p>{email}</p> : edit}
        </div>
        {activeAccount ? (
          <div className="status-wrap">
            <div className="active-user"></div>
            <p>active</p>
          </div>
        ) : (
          <div className="status-wrap">
            <div className="no-active-user"></div>
            <p>active</p>
          </div>
        )}
        <div className="action-wrap">
          <Button title={'Edytuj adres e-mail'} toggle={()=> setEditMode(true)}/>
          <Button title={'Usuń'} toggle={() => {
            deleteRecord();
            window.location.reload();
          }} />
          <Button title={'Resetuj'} />
        </div>
      </div>

      <div className="bottom-border"></div>
    </div>
  );
};
