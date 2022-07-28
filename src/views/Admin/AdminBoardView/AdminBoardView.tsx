import React from 'react';
import './_AdminBoardView.scss';
import { Route, Routes } from 'react-router-dom';
import { AdminAddView } from '../AdminAddView/AdminAddView';
import { AdminListStudentsView } from '../AdminListStudentsView/AdminListStudentsView';
import {AdminMenuView} from "../AdminMenuView/AdminMenuView";

export const AdminBoardView = () => {
  return <div>
    <h1>AdminBoardView</h1>
    <AdminMenuView/>
    <div>
      <Routes>
        <Route path="/" element={<AdminAddView />} />
        <Route path="list" element={<AdminListStudentsView />} />
      </Routes>
    </div>
  </div>;
};
