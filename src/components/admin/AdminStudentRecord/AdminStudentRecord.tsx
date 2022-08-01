import React from 'react';
import { useToggle } from '../../../utils/hooks/useToggle';

import { Button } from '../../common/Button/Button';
import './_AdminStudentRecord.scss';

export const AdminStudentRecord = () => {
  const [value, toggle] = useToggle(true);

  return (
    <div className={'component-AdminStudentRecord'}>
      <div className="top-wrap">
        <div className="user-name-wrap">
          <p>Imię i nazwisko</p>
          <p>adres@email.com</p>
        </div>
        {value ? (
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
