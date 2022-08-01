import React from 'react';

import { Header } from '../../../components/common/Header/Header';
import { Navigation } from '../../../components/common/Navigation/Navigation';
import { Filtr } from '../../../components/common/Filtr/Filtr';

import { StudentRecord } from '../../../components/common/StudentRecord/StudentRecord';
import { BottomNavigation } from '../../../components/common/BottomNavigation/BottomNavigation';

import './_AllStudentsView.scss';

export const AllStudentsView = () => {
  return (
    <main className={'view-AllStudentsView'}>
      <Header />
      <Navigation />
      <Filtr />
      <section className="students-list container">
        {/* Download list of students and map this component. Then provide data to StudentRecord */}
        <StudentRecord />
      </section>
      <BottomNavigation />
    </main>
  );
};
