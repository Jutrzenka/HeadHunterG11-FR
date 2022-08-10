import React, { useState, FormEvent } from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';

import './_AdminImportView.scss';

import { AdminLayout } from '../../../components/admin/AdminLayout/AdminLayout';

import { Form } from '../../../components/common/Form/Form';
import { Input } from '../../../components/common/Input/Input';
import { Button } from '../../../components/common/Button/Button';

export const AdminImportView = () => {
  const [file, setFile] = useState('');

  const sendForm = (event: FormEvent) => {
    console.log('send');
  };

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

        <div className="form-wrap container">
          <Form formInitialValues={file} functionToForm={sendForm}>
            <Input
              placeholder={''}
              name={''}
              type={'file'}
              value={setFile}
              // Należy ustawić maxLength
              maxLength={255}
            />
            <Button title={'Wybierz plik i dodaj'} />
          </Form>
        </div>
      </AdminLayout>
    </main>
  );
};
