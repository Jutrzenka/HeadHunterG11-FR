import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TestViews } from './views/TestViews';
import { LoginViews } from './views/LoginViews';

import './_App.scss';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TestViews />} />
      <Route path="/login" element={<LoginViews />} />
    </Routes>
  );
};
