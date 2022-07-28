import React, { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { Button } from '../../../components/common/Button/Button';
import { Input } from '../../../components/common/Input/Input';
import { Modal } from '../../../components/common/Modal/Modal';
import { Rating } from '../../../components/common/Rating/Rating';
import { Select } from '../../../components/common/Select/Select';
import { Scale } from '../../../components/common/Scale/Scale';
import { Radio } from '../../../components/common/Radio/Radio';
import { Insert } from '../../../components/common/Insert/Insert';

import './_AllStudentsView.scss';

export const AllStudentsView = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <header>Nagłówek z logo i dropdown menu dla Hr/Usera</header>
      <nav>
        <ul>
          <li>Dostępni kursanci</li>
          <li>Do rozmowy</li>
        </ul>
      </nav>
      <section className="students-list container">
        <div className="input-icons">
          <FaSearch />
          <Input nameValue={'Szukaj'} type={'text'} value={''} />
        </div>
        <div className="filtr-wrap">
          <FaFilter />
          <Button title={'Filtrowanie'} toggle={toggle} />
        </div>
        {modal && (
          <Modal toggle={toggle}>
            <div className="headline-wrap">
              <h3>Filtrowanie</h3>
              <Button title={'Wyczyść wszystkie'} />
            </div>
            <Rating title={'Ocena przejścia kursu'} />
            <Rating title={'Ocena aktywności i zaangażowanie na kursie'} />
            <Rating title={'Ocena kodu w projekcie własnym'} />
            <Rating title={'Ocena pracy w zespole w Scrum'} />
            <Select
              title={'Preferowane miejsce pracy'}
              selects={['Praca zdalna', 'Praca w biurze']}
            />
            <Select
              title={'Oczekiwany typ kontaktu'}
              selects={[
                'Umowa o pracę',
                'B2B',
                'Umowa zlecenie',
                'Umowa o dzieło',
              ]}
            />
            <Scale title={'Oczekiwane wynagrodzenie miesięczne netto'} />
            <Radio
              title={'Zgoda na odbycie bezpłatnych praktyk/stażu na początek'}
              selects={['Tak', 'Nie']}
            />
            <Insert
              title={
                'Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu'
              }
            />
            <div className="btn-modal-wrap">
              <Button title={'Anuluj'} toggle={toggle} />
              <Button title={'Pokaż wyniki'} />
            </div>
          </Modal>
        )}
      </section>
      <section>Dolna nawigacja</section>
    </>
  );
};
