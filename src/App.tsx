import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginView } from './views/App/LoginView/LoginView';
import { AllStudentsView } from './views/App/AllStudentsView/AllStudentsView';
import { StudentView } from './views/App/StudentView/StudentView';
import { AdminLoginView } from './views/Admin/AdminLoginView/AdminLoginView';
import { AdminBoardView } from './views/Admin/AdminBoardView/AdminBoardView';
// import {AdminAddView} from "./views/Admin/AdminAddView/AdminAddView";
// import {AdminListStudentsView} from "./views/Admin/AdminListStudentsView/AdminListStudentsView";

export const App = () => {
  switch (window.location.host.split('.')[0]) {
    case 'admin':
      return (
        <Routes>
          <Route path="/" element={<AdminLoginView />} />
          <Route path="/board/*" element={<AdminBoardView />} />
          {/*<Route path="/add" element={<AdminAddView />} />*/}
          {/*<Route path="/list" element={<AdminListStudentsView />} />*/}
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
