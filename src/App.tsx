import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginViews } from './views/LoginView/LoginViews';
import { Students } from './views/Students/Students';
import { Student } from './components/student/Student';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginViews />} />
      <Route path="/students/:id" element={<Student />} />
      <Route path="/students" element={<Students />} />
    </Routes>
  );
};
