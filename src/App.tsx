import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginViews } from './views/LoginViews';
import { Student } from './components/student/Student';

import './_App.scss';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginViews />} />
      <Route path="/students/:id" element={<Student />} />
    </Routes>
  );
};
