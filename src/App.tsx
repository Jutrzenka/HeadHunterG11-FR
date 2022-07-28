import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginView } from './views/App/LoginView/LoginView';
import { AllStudentsView } from './views/App/AllStudentsView/AllStudentsView';
import { StudentView } from './views/App/StudentView/StudentView';
import { AdminLoginView } from './views/Admin/AdminLoginView/AdminLoginView';
import { AdminImportView } from './views/Admin/AdminImportView/AdminImportView';
import { AdminListsView } from './views/Admin/AdminListsView/AdminListsView';
import { SchowCvView } from './views/App/SchowCvView/SchowCvView';
import { EditCvView } from './views/App/EditCvView/EditCvView';
import { StudentRegisterView } from './views/App/StudentRegisterView/StudentRegisterView';
import { InterviewView } from './views/App/InterviewView/InterviewView';
import { HrRegisterView } from './views/App/HrRegisterView/HrRegisterView';
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
          <Route path="/lists" element={<AdminListsView />} />
          <Route path="/imports" element={<AdminImportView />} />
        </Routes>
      );
    default:
      return (
        <Routes>
          {/* Hr & User: */}
          <Route path="/" element={<LoginView />} />
          {/* User: */}
          <Route path="/cv" element={<SchowCvView />} />
          <Route path="/cv/edit" element={<EditCvView />} />
          <Route
            path="/students/:login/:registerCode"
            element={<StudentRegisterView />}
          />
          {/* Hr: */}
          <Route path="/students" element={<AllStudentsView />} />
          <Route path="/students/:id" element={<StudentView />} />
          <Route path="/interview" element={<InterviewView />} />
          <Route path="/hr/:login/:registerCode" element={<HrRegisterView />} />
        </Routes>
      );
  }
};
