import React from 'react';
import { useToggle } from '../../../utils/hooks/useToggle';
import { AboutUserShortCut } from '../AboutUserShortCut/AboutUserShortCut';
import { Button } from '../Button/Button';

import './_StudentRecord.scss';
import { ShowCvBtn } from "../ShowCvBtn/ShowCvBtn";

export const StudentRecord = () => {
  const [value, toggle] = useToggle(false);

  return (
    <div className={'component-StudentRecord'}>
      <div className="student-record">
        <div className="top-wrap">
          <div className="avatar-wrap">
            <div className="reservation">
              <p>Rezerwacja do</p>
              <p className="date">11.07.2022 r.</p>
            </div>
            <div className="img-wrap">
              <img src="/img/icons/avatar.svg" alt="awatar" />
              <p>Imię Nazwisko</p>
            </div>
          </div>
          <div className="action-wrap">
            <ShowCvBtn url={`../students/id`}/>
            <Button title={'Brak zainteresowania'} />
            <Button title={'Zatrudniony'} />
            <img
              src="/img/icons/up.svg"
              alt="arrow"
              className={value ? 'arrow-up' : ''}
              onClick={toggle}
            />
          </div>
        </div>
        {value && (
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
    </div>
  );
};
