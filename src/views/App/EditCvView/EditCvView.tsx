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

      <section className="student-about container">
        <div className="title-wrap">
          <h3>Ogólne</h3>
        </div>
        <div className="content-wrap">
          <div className="settingsList">
            <div className="settingsListItem">
              <h3 className="settingsListItemLabel">Adres e-mail</h3>
              <span className="settingsListItemContent">
                marcelurban2@tlen.pl
              </span>
            </div>
            <div className="settingsListItem">
              <h3 className="settingsListItemLabel">Numer tel.</h3>
              <span className="settingsListItemContent"></span>
            </div>
            <div className="settingsListItem">
              <h3 className="settingsListItemLabel">Imię</h3>
              <span className="settingsListItemContent"></span>
            </div>
            <div className="settingsListItem">
              <h3 className="settingsListItemLabel">Nazwisko</h3>
              <span className="settingsListItemContent"></span>
            </div>
            <div className="settingsListItem">
              <h3 className="settingsListItemLabel">Login GitHuba</h3>
              <span className="settingsListItemContent"></span>
            </div>
            <div className="settingsListItem">
              <h3 className="settingsListItemLabel">Krótkie bio</h3>
              <span className="settingsListItemContent"></span>
            </div>
          </div>
        </div>
      </section>

      <section className="student-hireExpectations container">
        <div className="title-wrap">
          <h3>Oczekiwania w stosunku do zatrudnienia</h3>
        </div>
        <div className="content-wrap">
          <div className="settingsList">
            <div className="settingsListItem">
              <h3 className="settingsListItemLabel">
                Preferowane miejsce pracy
              </h3>
              <span className="settingsListItemContent"></span>
            </div>
            <div className="settingsListItem">
              <h3 className="settingsListItemLabel">
                Docelowe miasto, gdzie chce pracować kandydat
              </h3>
              <span className="settingsListItemContent"></span>
            </div>
            <div className="settingsListItem">
              <h3 className="settingsListItemLabel">
                Oczekiwany typ kontraktu
              </h3>
              <span className="settingsListItemContent"></span>
            </div>
            <div className="settingsListItem">
              <h3 className="settingsListItemLabel">
                Oczekiwane wynagrodzenie miesięczne netto
              </h3>
              <span className="settingsListItemContent"></span>
            </div>
            <div className="settingsListItem">
              <h3 className="settingsListItemLabel">
                Zgoda na odbycie bezpłatnych praktyk/stażu na początek
              </h3>
              <span className="settingsListItemContent"></span>
            </div>
            <div className="settingsListItem">
              <h3 className="settingsListItemLabel">
                Komercyjne doświadczenie w programowaniu
              </h3>
              <span className="settingsListItemContent"></span>
            </div>
          </div>
        </div>
      </section>

      <section className="student-education container">
        <div className="title-wrap">
          <h3>Edukacja</h3>
        </div>
        <div className="content-wrap">
          <div className="settingsList">
            <div className="settingsListItem">
              <h3 className="settingsListItemLabel"></h3>
              <span className="settingsListItemContent">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam at, est expedita inventore quidem recusandae tenetur
                voluptate. Iure quibusdam, voluptas!
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="student-courses container">
        <div className="title-wrap">
          <h3>Kursy</h3>
        </div>
        <div className="content-wrap">
          <div className="settingsList">
            <div className="settingsListItem">
              <h3 className="settingsListItemLabel"></h3>
              <span className="settingsListItemContent">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam at, est expedita inventore quidem recusandae tenetur
                voluptate. Iure quibusdam, voluptas!
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="student-work_experience container">
        <div className="title-wrap">
          <h3>Doświadczenie zawodowe</h3>
        </div>
        <div className="content-wrap">
          <div className="settingsList">
            <div className="settingsListItem">
              <h3 className="settingsListItemLabel"></h3>
              <span className="settingsListItemContent">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam at, est expedita inventore quidem recusandae tenetur
                voluptate. Iure quibusdam, voluptas!
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="student-portfolio container">
        <div className="title-wrap">
          <h3>Portfolio</h3>
        </div>
        <div className="content-wrap">
          <div className="settingsList">
            <div className="settingsListItem">
              <h3 className="settingsListItemLabel"></h3>
              <span className="settingsListItemContent">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam at, est expedita inventore quidem recusandae tenetur
                voluptate. Iure quibusdam, voluptas!
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="student-project container">
        <div className="title-wrap">
          <h3>Projekt na zaliczenie</h3>
        </div>
        <div className="content-wrap">
          <div className="settingsList">
            <div className="settingsListItem">
              <h3 className="settingsListItemLabel"></h3>
              <span className="settingsListItemContent">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam at, est expedita inventore quidem recusandae tenetur
                voluptate. Iure quibusdam, voluptas!
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
