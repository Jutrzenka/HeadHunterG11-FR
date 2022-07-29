import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { Button } from '../../../components/common/Button/Button';
import { Input } from '../../../components/common/Input/Input';

import './_AdminListView.scss';

export const AdminListView = () => {
  return (
    <main className={'view-AdminListView'}>
      <nav>
        <div className="btn-wrap">
          <Button title={'Kursanci'} className={'active'} />
          <Button title={'Headhunterzy'} />
        </div>

        <div className="input-icons">
          <FaSearch />
          <Input nameValue={'Szukaj'} type={'text'} value={''} />
        </div>

        <div className="page-number">
          <MdNavigateBefore />
          <p>
            <span>10</span> z <span>11</span>
          </p>
          <MdNavigateNext />
        </div>
      </nav>
      <h1>AdminListsView</h1>;
    </main>
  );
};
