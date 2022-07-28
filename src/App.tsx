import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginViews } from './views/App/LoginView/LoginViews';
import { AllStudentsView } from './views/App/AllStudentsView/AllStudentsView';
import { StudentView } from './views/App/StudentView/StudentView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginViews />} />
      <Route path="/students/:id" element={<StudentView />} />
      <Route path="/students" element={<AllStudentsView />} />
    </Routes>
  );
};
