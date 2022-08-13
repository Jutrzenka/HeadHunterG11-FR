import React, { useState, FormEvent } from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';

import './_AdminImportView.scss';

import { AdminLayout } from '../../../components/admin/AdminLayout/AdminLayout';

import { Form } from '../../../components/common/Form/Form';
import { Input } from '../../../components/common/Input/Input';
import { Button } from '../../../components/common/Button/Button';
import { AdminImportCsv } from '../../../components/admin/AdminImportCSV/AdminImportCsv';
import { AdminImportJson } from '../../../components/admin/AdminImportJSON/AdminImportJson';
import { AdminImportPut } from '../../../components/admin/AdminImportPUT/AdminImportPut';

export const AdminImportView = () => {
  const [fileType, setFileType] = useState('CSV');

  return (
    <main className={'view-AdminImportView'}>
      <AdminLayout>
        <div className="import-file-wrap container">
          <div onClick={()=> setFileType('CSV')} className={`select-file ${fileType === 'CSV' ? 'active' : ''}`}>
            <AiOutlineFileAdd />
            <p>CSV</p>
          </div>
          <div onClick={()=> setFileType('JSON')} className={`select-file ${fileType === 'JSON' ? 'active' : ''}`}>
            <AiOutlineFileAdd />
            <p>JSON</p>
          </div>
          <div onClick={()=> setFileType('PUT')} className={`select-file ${fileType === 'PUT' ? 'active' : ''}`}>
            <AiOutlineFileAdd />
            <p>PUT</p>
          </div>
        </div>

        <div className="form-wrap container">
          {fileType === "CSV" && <AdminImportCsv/>}
          {fileType === "JSON" && <AdminImportJson/>}
          {fileType === "PUT" && <AdminImportPut/>}
        </div>
      </AdminLayout>
    </main>
  );
};
