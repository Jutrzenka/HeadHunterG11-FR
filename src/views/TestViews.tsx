import React from 'react';
import moment from 'moment';
import { Audio } from 'react-loader-spinner';
import { NavLink } from 'react-router-dom';

export const TestViews = () => {
  return (
    <div className="App">
      <h1>Test</h1>
      <h2>Moment.js</h2>
      <h3>{moment().format()}</h3>
      <h2>Spinner</h2>
      <Audio height="100" width="100" color="grey" ariaLabel="loading" />
      <NavLink to={'/login'}>
        Jeśli w teście wszystko działa przejdź do logowania! KLIKNIJ WE MNIE!
      </NavLink>
    </div>
  );
};
