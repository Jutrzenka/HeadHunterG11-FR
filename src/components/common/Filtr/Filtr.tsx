import React from 'react';
import { useToggle } from '../../../utils/hooks/useToggle';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { Modal } from '../Modal/Modal';
import { Rating } from '../Rating/Rating';
import { Select } from '../Select/Select';
import { Scale } from '../Scale/Scale';
import { Radio } from '../Radio/Radio';
import { Button } from '../Button/Button';
import { Insert } from '../Insert/Insert';
import { Input } from '../Input/Input';

import './_Filtr.scss';

export const Filtr = () => {
  const [value, toggle] = useToggle();

  return (
    <section className="students-filter-component container">
      <div className="input-icons">
        <FaSearch />
        <Input nameValue={'Szukaj'} type={'text'} value={''} />
      </div>
      <div className="filtr-wrap">
        <FaFilter />
        <Button title={'Filtrowanie'} toggle={toggle} />
      </div>
      {value && (
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
  );
};
