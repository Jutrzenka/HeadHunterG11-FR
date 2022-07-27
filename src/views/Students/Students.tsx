import React from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { Button } from '../../components/common/Button/Button';
import { Input } from '../../components/common/Input/Input';
import './_Students.scss';

export const Students = () => {
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
          <Button title={'Filtrowanie'} />
        </div>
      </section>
      <section>Dolna nawigacja</section>
    </>
  );
};
