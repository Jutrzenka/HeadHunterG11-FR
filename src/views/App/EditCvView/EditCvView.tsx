import React from 'react';

import './_EditCvView.scss';
import { Header } from '../../../components/common/Header/Header';
import { FaGithub, FaPhone, MdEmail } from 'react-icons/all';

export const EditCvView = () => {
  return (
    <main className={'view-EditCvView'}>
      <Header />
      <h1>EditCvView</h1>
      {/*<section className="student-contact container">*/}
      {/*  <div className="img-wrap">*/}
      {/*    <img src="/img/icons/avatar.svg" alt="avatar" />*/}
      {/*    <h3>Jan Kowalski</h3>*/}
      {/*    <div>*/}
      {/*      <FaGithub />*/}
      {/*      <p>jankowalski</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="contact-wrap">*/}
      {/*    <div>*/}
      {/*      <FaPhone />*/}
      {/*      <p>+48 566 072 227</p>*/}
      {/*    </div>*/}

      {/*    <div>*/}
      {/*      <MdEmail />*/}
      {/*      <p>jankowalski@gmail.com</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      <div className="student-about">
        <section>
          <h3>Adres e-mail</h3>
        </section>
        <section>
          <h3>Numer tel.</h3>
        </section>
        <section>
          <h3>Imię</h3>
        </section>
        <section>
          <h3>Nazwisko</h3>
        </section>
        <section>
          <h3>Login GitHuba</h3>
        </section>
        <section>
          <h3>Krótkie bio</h3>
        </section>
      </div>

      <div className="hireExpectations">
        <section>
          <h3>Preferowane miejsce pracy</h3>
        </section>
        <section>
          <h3>Docelowe miasto, gdzie chce pracować kandydat</h3>
        </section>
        <section>
          <h3>Oczekiwany typ kontraktu</h3>
        </section>
        <section>
          <h3>Oczekiwane wynagrodzenie miesięczne netto</h3>
        </section>
        <section>
          <h3>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</h3>
        </section>
        <section>
          <h3>Komercyjne doświadczenie w programowaniu</h3>
        </section>
      </div>

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
        <h3>Projekt na zaliczenie</h3>
      </section>
    </main>
  );
};
