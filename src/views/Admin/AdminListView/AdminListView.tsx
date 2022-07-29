import React from 'react';
import { AdminNav } from '../../../components/admin/AdminNav/AdminNav';

import './_AdminListView.scss';

export const AdminListView = () => {
  return (
    <main className={'view-AdminListView'}>
      <AdminNav />
      <h1>AdminListsView</h1>;
    </main>
  );
};
