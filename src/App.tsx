import React from 'react';
import './_App.scss';
import moment from 'moment';
import { Audio } from 'react-loader-spinner';

export const App = () => {
  return (
    <div className="App">
      <h1>Test</h1>
      <h2>Moment.js</h2>
      <h3>{moment().format()}</h3>
      <h2>Spinner</h2>
      <Audio height="100" width="100" color="grey" ariaLabel="loading" />
    </div>
  );
};
