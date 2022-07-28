import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginView } from './views/App/LoginView/LoginView';
import { AllStudentsView } from './views/App/AllStudentsView/AllStudentsView';
import { StudentView } from './views/App/StudentView/StudentView';
import { AdminLoginView } from './views/Admin/AdminLoginView/AdminLoginView';
import { AdminBoardView } from './views/Admin/AdminBoardView/AdminBoardView';

export const App = () => {
  switch (window.location.host.split('.')[0]) {
    case 'admin':
      return (
        <Routes>
          <Route path="/" element={<AdminLoginView />} />
          <Route path="/board" element={<AdminBoardView />} />
        </Routes>
      );
    default:
      return (
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/students/:id" element={<StudentView />} />
          <Route path="/students" element={<AllStudentsView />} />
        </Routes>
      );
  }
};
