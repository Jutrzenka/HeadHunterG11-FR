import React from 'react';
import { Button } from '../Button/Button';
import './_StudentRecord.scss';

export const StudentRecord = () => {
  return (
    <>
      <div className="student-record">
        <div className="avatar-wrap">
          <div className="rezerwation">
            <p>Rezerwacja do</p>
            <p className="date">11.07.2022 r.</p>
          </div>
          <div className="img-wrap">
            <img src="/img/icons/avatar.svg" alt="awatar" />
            <p>Imię Nazwisko</p>
          </div>
        </div>
        <div className="action-wrap">
          <Button title={'Pokaż Cv'} />
          <Button title={'Brak zainteresowania'} />
          <Button title={'Zatrudniony'} />
          <img src="/img/icons/up.svg" alt="arrow" />
        </div>
      </div>
      <div className="record-underline"></div>
    </>
  );
};
