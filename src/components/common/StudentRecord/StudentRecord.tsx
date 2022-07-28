import React, { useState } from 'react';
import { AboutUserShortCut } from '../AboutUserShortCut/AboutUserShortCut';
import { Button } from '../Button/Button';
import './_StudentRecord.scss';

export const StudentRecord = () => {
  const [toggle, setToggle] = useState(false);

  const toggleAcordion = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="student-record">
        <div className="top-wrap">
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
            <img
              src="/img/icons/up.svg"
              alt="arrow"
              className={toggle ? 'arrow-up' : ''}
              onClick={toggleAcordion}
            />
          </div>
        </div>
        {toggle && (
          <div className="acordion">
            {/* Get data. Map this component and pass data to component */}
            <div className="single-text">
              <AboutUserShortCut
                title={'Ocena przejścia kursu '}
                description={4}
              />
            </div>
          </div>
        )}
        <div className="bottom-border"></div>
      </div>
    </>
  );
};
