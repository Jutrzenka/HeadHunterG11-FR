import React, { useState } from 'react';

import './_EditCvView.scss';
import { Header } from '../../../components/common/Header/Header';
import { FaGithub, FaPhone, MdEmail } from 'react-icons/all';
import { Input } from '../../../components/common/InputV2/Input';
import { Button } from '../../../components/common/Button/Button';
import { Textarea } from '../../../components/common/Textarea/Textarea';
import { Select } from '../../../components/common/Select/Select';
import { Radio } from '../../../components/common/Radio/Radio';

export const EditCvView = () => {
  const [userData, setUserDAta] = useState({
    about: {
      email: 'marcelurban2@tlen.pl',
      tel: '123123123',
      firstName: 'Jan',
      lastName: 'Kowalski',
      githubUsername: 'Janek',
      bio: 'Siemano \ndddd\nfd\nd\n\ndddd',
    },
    hireExpectations: {
      expectedTypeWork: '',
      targetWorkCity: '',
      expectedContractType: '',
      expectedSalary: '',
      canTakeApprenticeship: '',
      monthsOfCommercialExp: '',
    },
    education: '',
    courses: '',
    workExperience: '',
    portfolioUrls: '',
    projectUrls: '',
  });

  return (
    <main className={'view-EditCvView'}>
      <Header />
      <h1>EditCvView</h1>
      {/*##FORMULARZ */}
      <section className="student-about container">
        <div className="title-wrap">
          <h3>Ogólne</h3>
          <Button title={'Edytuj'} />
        </div>

        <div className="content-wrap">
          <Input
            title={'Adres e-mail'}
            value={userData.about.email}
            type={'text'}
          />
          <Input title={'Nr tel.'} value={userData.about.tel} type={'text'} />
          <Input
            title={'Imię'}
            value={userData.about.firstName}
            type={'text'}
          />
          <Input
            title={'Nazwisko'}
            value={userData.about.lastName}
            type={'text'}
          />
          <Input
            title={'Login GitHuba'}
            value={userData.about.githubUsername}
            type={'text'}
          />
          <Textarea
            nameValue={'bio'}
            title={'Krótkie bio'}
            value={userData.about.bio}
          />
        </div>
      </section>

      <section className="student-hireExpectations container">
        <div className="title-wrap">
          <h3>Oczekiwania w stosunku do zatrudnienia</h3>
          <Button title={'Edytuj'} />
        </div>

        <div className="content-wrap">
          <Select
            title={'Preferowane miejsce pracy'}
            selects={[
              'Na miejscu',
              'Gotowość od przeprowadzki',
              'Wyłącznie zdalnie',
              'Hybrydowo',
              'Bez znaczenia',
            ]}
          />

          <Input
            title={'Docelowe miasto, gdzie chce pracować kandydat'}
            value={userData.about.email}
            type={'text'}
          />

          <Select
            title={'Oczekiwany typ kontraktu'}
            selects={[
              'Tylko UoP',
              'Możliwe B2B',
              'Możliwe UZ/UoD',
              'Brak preferencji',
            ]}
          />

          <Input
            title={'Oczekiwane wynagrodzenie miesięczne netto'}
            value={userData.hireExpectations.expectedSalary}
            type={'number'}
          />

          <Radio
            title={'Zgoda na odbycie bezpłatnych praktyk/stażu na początek'}
            selects={['TAK', 'NIE']}
          />

          <Input
            title={'Komercyjne doświadczenie w programowaniu'}
            value={userData.hireExpectations.monthsOfCommercialExp}
            type={'number'}
          />
        </div>
      </section>

      <section className="student-education container">
        <div className="title-wrap">
          <h3>Edukacja</h3>
          <Button title={'Edytuj'} />
        </div>
        <div className="content-wrap">
          <Textarea value={userData.education} nameValue={'one-column'} />
        </div>
      </section>

      <section className="student-courses container">
        <div className="title-wrap">
          <h3>Kursy</h3>
          <Button title={'Edytuj'} />
        </div>
        <div className="content-wrap">
          <Textarea value={userData.courses} nameValue={'one-column'} />
        </div>
      </section>

      <section className="student-work_experience container">
        <div className="title-wrap">
          <h3>Doświadczenie zawodowe</h3>
          <Button title={'Edytuj'} />
        </div>
        <div className="content-wrap">
          <Textarea value={userData.workExperience} nameValue={'one-column'} />
        </div>
      </section>

      <section className="student-work_experience container">
        <div className="title-wrap">
          <h3>Portfolio</h3>
          <Button title={'Edytuj'} />
        </div>
        <div className="content-wrap">
          <Textarea value={userData.portfolioUrls} nameValue={'one-column'} />
        </div>
      </section>

      <section className="student-work_experience container">
        <div className="title-wrap">
          <h3>Projekt na zaliczenie</h3>
          <Button title={'Edytuj'} />
        </div>
        <div className="content-wrap">
          <Textarea value={userData.projectUrls} nameValue={'one-column'} />
        </div>
      </section>
    </main>
  );
};
