import React from 'react';

import { Header } from '../../../components/common/Header/Header';
import { Link } from 'react-router-dom';
import { Filtr } from '../../../components/common/Filtr/Filtr';

import './_AllStudentsView.scss';
import { StudentRecord } from '../../../components/common/StudentRecord/StudentRecord';
import { BottomNavigation } from '../../../components/common/BottomNavigation/BottomNavigation';

import './_AllStudentsView.scss';

export const AllStudentsView = () => {
  return (
    <main className={'view-AllStudentsView'}>
      <Header />
      <nav className={'component-Navigation'}>
        <Link to={'/students'} className="active-btn ">
          Dostępni kursanci
        </Link>
        <Link to={'/interview'} className="notactive">
          Do rozmowy
        </Link>
      </nav>
      <Filtr />
      <section className="students-list container">
        {/* Download list of students and map this component. Then provide data to StudentRecord */}
        <StudentRecord />
      </section>
      <BottomNavigation />
    </main>
  );
};
