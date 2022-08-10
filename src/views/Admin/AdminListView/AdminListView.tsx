import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { AdminLayout } from '../../../components/admin/AdminLayout/AdminLayout';
import { AdminStudentRecord } from '../../../components/admin/AdminStudentRecord/AdminStudentRecord';
import { Button } from '../../../components/common/Button/Button';
import { Input } from '../../../components/common/Input/Input';

import './_AdminListView.scss';

export const AdminListView = () => {
  return (
    <main className={'view-AdminListView'}>
      <AdminLayout>
        <div className="lists-navigation">
          <div className="btn-wrap">
            <Button title={'Kursanci'} className={'active'} />
            <Button title={'Headhunterzy'} />
          </div>

          <div className="input-icons">
            <FaSearch />
            <Input placeholder={'Szukaj'} type={'text'} name={''} />
          </div>

          <div className="page-number">
            <MdNavigateBefore />
            <p className="number-wrap">
              <span>10</span> / <span>11</span>
            </p>
            <MdNavigateNext />
          </div>
        </div>
        <section className="students-list container">
          <AdminStudentRecord />
          <AdminStudentRecord />
          <AdminStudentRecord />
        </section>
      </AdminLayout>
    </main>
  );
};
