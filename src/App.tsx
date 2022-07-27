import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginViews } from './views/LoginViews';
import { Students } from './views/Students/Students';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginViews />} />
      <Route path="/students" element={<Students />} />
    </Routes>
  );
};
