import React from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';

import './_AdminImportView.scss';

import { AdminLayout } from '../../../components/admin/AdminLayout/AdminLayout';
import { useToggle } from '../../../utils/hooks/useToggle';

export const AdminImportView = () => {
  return (
    <main className={'view-AdminImportView'}>
      <AdminLayout>
        <div className="import-file-wrap container">
          <div className="select-file active">
            <AiOutlineFileAdd />
            <p>CSV</p>
          </div>
          <div className="select-file">
            <AiOutlineFileAdd />
            <p>JSON</p>
          </div>
          <div className="select-file">
            <AiOutlineFileAdd />
            <p>PUT</p>
          </div>
        </div>
        <div></div>
      </AdminLayout>
    </main>
  );
};
