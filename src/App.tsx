import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginViews } from './views/LoginViews';

import './_App.scss';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginViews />} />
    </Routes>
  );
};
