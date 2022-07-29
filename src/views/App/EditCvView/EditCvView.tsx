import React from 'react';

import './_EditCvView.scss';
import { Header } from '../../../components/common/Header/Header';

export const EditCvView = () => {
  return (
    <main className={'view-EditCvView'}>
      <Header />
      <h1>EditCvView</h1>
      <section className="student-contact container"></section>

      <section>
        <h3>Oceny</h3>
      </section>
      <section>
        <h3>Oczekiwania w stosunku do zatrudnienia</h3>
      </section>
      <section>
        <h3>Edukacja</h3>
      </section>
      <section>
        <h3>Kursy</h3>
      </section>
      <section>
        <h3>Doświadczenie zawodowe</h3>
      </section>
      <section>
        <h3>Portfolio</h3>
      </section>
      <section>
        <h3>Projekt w zespole Scrumowym</h3>
      </section>
      <section>
        <h3>Projekt na zaliczenie</h3>
      </section>
    </main>
  );
};
