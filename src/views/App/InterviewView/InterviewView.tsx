import React from 'react';
import { Header } from '../../../components/common/Header/Header';

import { StudentRecord } from '../../../components/common/StudentRecord/StudentRecord';
import { Filtr } from '../../../components/common/Filtr/Filtr';
import { BottomNavigation } from '../../../components/common/BottomNavigation/BottomNavigation';
import { Link } from 'react-router-dom';

import './_InterviewView.scss';

export const InterviewView = () => {
  return (
    <main className={'view-InterviewView'}>
      <Header />
      <nav className={'component-Navigation'}>
        <Link to={'/students'} className="notactive">
          Dostępni kursanci
        </Link>
        <Link to={'/interview'} className="active-btn ">
          Do rozmowy
        </Link>
      </nav>
      <Filtr />
      <section className="students-list container">
        {/* Download list of students and map this component. Then provide data to StudentRecord */}
        <StudentRecord />
        <StudentRecord />
        <StudentRecord />
      </section>
      <BottomNavigation />
    </main>
  );
};
