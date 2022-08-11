import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { AdminLayout } from '../../../components/admin/AdminLayout/AdminLayout';
import { AdminStudentRecord } from '../../../components/admin/AdminStudentRecord/AdminStudentRecord';
import { Button } from '../../../components/common/Button/Button';
import { Input } from '../../../components/common/Input/Input';

import './_AdminListView.scss';
import { useFetch } from "../../../utils/hooks/useFetch";

interface StudentRecord {
  activeAccount: boolean;
  email: string;
  idUser: string;
  login: string;
  role: string
}

export const AdminListView = () => {
  const [activeRole, setActiveRole] = useState('students');
  const [filterRole, setFilterRole] = useState('S')
  const [data,status] = useFetch(`http://localhost:3001/api/admin/${activeRole}`);
  console.log(data)

  // @ts-ignore
  const dataToMap: StudentRecord[] = status === 'fetched' ?[...data.data.value] : null
  console.log(dataToMap)

  const handleRole = (role:string) => {
      setActiveRole(role);
    if(role === 'students'){
      setFilterRole('S');
    } else if (role === 'headhunters'){
      setFilterRole('H');
    }
  }

  return (
    <main className={'view-AdminListView'}>
      <AdminLayout>
        <div className="lists-navigation">
          <div className="btn-wrap">
            <Button title={'Kursanci'} toggle={() =>handleRole('students')} className={activeRole === 'students' ? 'active' : '' } />
            <Button title={'Headhunterzy'} toggle={() => handleRole('headhunters')} className={activeRole === 'headhunters' ? 'active' : '' }/>
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
          {status === 'fetched' ? dataToMap.filter((item)=>(
              item.role === filterRole
          ))
              .map((item:StudentRecord) =>
            <AdminStudentRecord
                key={item.idUser}
                activeAccount={ item.activeAccount }
                email={ item.email }
                idUser={ item.idUser }
                login={ item.login }
                role={ item.role }
            />
          ) : 'pobieram dane'}
        </section>
      </AdminLayout>
    </main>
  );
};
