import React from 'react';

import { Header } from '../../../components/common/Header/Header';
import { Navigation } from '../../../components/common/Navigation/Navigation';
import { Filtr } from '../../../components/common/filtr/Filtr';
import { StudentRecord } from '../../../components/common/StudentRecord/StudentRecord';

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

      <section className="container">Dolna nawigacja</section>
    </main>
  );
};
