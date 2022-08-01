import React from 'react';
import { Header } from '../../../components/common/Header/Header';
import { Navigation } from '../../../components/common/Navigation/Navigation';

import { StudentRecord } from '../../../components/common/StudentRecord/StudentRecord';
import { Filtr } from '../../../components/common/Filtr/Filtr';

export const InterviewView = () => {
  return (
    <main className={'view-InterviewView'}>
      <Header />
      <Navigation />
      {/* UWAGA ! Po zmergowaniu do developa brancha 0005-0, można wywalić ten kod i wstawić component Filtr */}
      <Filtr />
      <section className="students-list container">
        {/* Download list of students and map this component. Then provide data to StudentRecord */}
        <StudentRecord />
      </section>
      {/* UWAGA ! Po zmergowaniu do developa brancha 0005-0, wtawić tu komponent _BottomNavigation */}
    </main>
  );
};
