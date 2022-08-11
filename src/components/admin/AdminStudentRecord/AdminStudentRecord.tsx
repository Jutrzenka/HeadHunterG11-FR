import React from 'react';
import { useToggle } from '../../../utils/hooks/useToggle';

import { Button } from '../../common/Button/Button';
import './_AdminStudentRecord.scss';

interface Props {
  activeAccount: boolean;
  email: string;
  idUser: string;
  login: string;
  role: string
}

export const AdminStudentRecord = ({activeAccount,email,idUser,login,role}:Props) => {
  const [value, toggle] = useToggle(true);
  const dataFromProps = {idUser,role}

  return (
    <div className={'component-AdminStudentRecord'}>
      <div className="top-wrap">
        <div className="user-name-wrap">
          <p>{login}</p>
          <p>{email}</p>
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
          <Button title={'Edytuj adres e-mail'} />
          <Button title={'Usuń'} />
          <Button title={'Resetuj'} />
        </div>
      </div>

      <div className="bottom-border"></div>
    </div>
  );
};
