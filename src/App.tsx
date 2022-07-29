import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginView } from './views/App/LoginView/LoginView';
import { AllStudentsView } from './views/App/AllStudentsView/AllStudentsView';
import { StudentView } from './views/App/StudentView/StudentView';
import { AdminLoginView } from './views/Admin/AdminLoginView/AdminLoginView';
import { AdminImportView } from './views/Admin/AdminImportView/AdminImportView';
import { AdminListView } from './views/Admin/AdminListView/AdminListView';
import { ShowCvView } from './views/App/ShowCvView/ShowCvView';
import { EditCvView } from './views/App/EditCvView/EditCvView';
import { StudentRegisterView } from './views/Register/StudentRegisterView/StudentRegisterView';
import { InterviewView } from './views/App/InterviewView/InterviewView';
import { HrRegisterView } from './views/Register/HrRegisterView/HrRegisterView';
//import { useDispatch, useSelector } from 'react-redux';
//import { RootState } from './redux/store';

export const App = () => {
  // global variable redux toolkit
  //const { token, type } = useSelector((state: RootState) => state.token);
  //const dispatch = useDispatch();

  switch (window.location.host.split('.')[0]) {
    case 'admin':
      return (
        <Routes>
          {/* Admin: */}
          <Route path="/" element={<AdminLoginView />} />
          <Route path="/imports" element={<AdminImportView />} />
          <Route path="/lists" element={<AdminListView />} />
        </Routes>
      );
    case 'register':
      return (
        <Routes>
          {/* Register: */}
          <Route
            path="/students/:login/:registerCode"
            element={<StudentRegisterView />}
          />
          <Route
            path="/headhunters/:login/:registerCode"
            element={<HrRegisterView />}
          />
        </Routes>
      );
    default:
      return (
        <Routes>
          {/* Hr & User: */}
          <Route path="/" element={<LoginView />} />
          {/* User: */}
          <Route path="/cv" element={<ShowCvView />} />
          <Route path="/cv/edit" element={<EditCvView />} />
          {/* Hr: */}
          <Route path="/students" element={<AllStudentsView />} />
          <Route path="/students/:id" element={<StudentView />} />
          <Route path="/interview" element={<InterviewView />} />
        </Routes>
      );
  }
};
