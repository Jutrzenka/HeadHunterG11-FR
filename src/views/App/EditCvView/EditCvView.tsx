import React, { useState } from 'react';
import { Header } from '../../../components/common/Header/Header';
import { Input } from '../../../components/common/Input/Input';
import { Button } from '../../../components/common/Button/Button';
import { Textarea } from '../../../components/common/Textarea/Textarea';
import { Select } from '../../../components/common/Select/Select';
import { Radio } from '../../../components/common/Radio/Radio';
import './_EditCvView.scss';
import { Form } from "../../../components/common/Form/Form";

export const EditCvView = () => {
  const initForm = {
    about: {
      email: 'test@tlen.pl',
      tel: '123123123',
      firstName: 'Jan',
      lastName: 'Kowalski',
      githubUsername: 'Janek',
      bio: 'Test \ndddd\nfd\nd\n\ndddd',
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
  }
  // const [userData, setUserDAta] = useState({
  //   about: {
  //     email: 'test@tlen.pl',
  //     tel: '123123123',
  //     firstName: 'Jan',
  //     lastName: 'Kowalski',
  //     githubUsername: 'Janek',
  //     bio: 'Test \ndddd\nfd\nd\n\ndddd',
  //   },
  //   hireExpectations: {
  //     expectedTypeWork: '',
  //     targetWorkCity: '',
  //     expectedContractType: '',
  //     expectedSalary: '',
  //     canTakeApprenticeship: '',
  //     monthsOfCommercialExp: '',
  //   },
  //   education: '',
  //   courses: '',
  //   workExperience: '',
  //   portfolioUrls: '',
  //   projectUrls: '',
  // });

  const [activeSections, setActiveSections] = useState({
    about: false,
    hireExpectations: false,
    education: false,
    courses: false,
    workExperience: false,
    portfolio: false,
    project: false,
  });

  const updateUserData = () => {
    console.log('Fetch- wysłanie nowych danych na backend');
  };

  const toggle = (key: string) => {
    const index = Object.keys(activeSections).indexOf(key);
    const value = Object.values(activeSections)[index];

    value && updateUserData();

    setActiveSections((prevState) => {
      return {
        ...prevState,
        [key]: !value,
      };
    });
  };

  return (
    <main className={'view-EditCvView'}>
      <Header />
      {/*##FORMULARZ */}
      <section className="about container">
        <div className="title-wrap">
          <h3>Ogólne</h3>
          <Button
            title={activeSections.about ? 'Zapisz' : 'Edytuj'}
            toggle={() => toggle('about')}
          />
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

      <section className="hireExpectations container">
        <div className="title-wrap">
          <h3>Oczekiwania w stosunku do zatrudnienia</h3>
          <Button
            title={activeSections.hireExpectations ? 'Zapisz' : 'Edytuj'}
            toggle={() => toggle('hireExpectations')}
          />
        </div>

        <div className="content-wrap">
          <Select
            title={'Preferowane miejsce pracy'}
            selects={[
              'Na miejscu',
              'Gotowość do przeprowadzki',
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

      <section className="education container">
        <div className="title-wrap">
          <h3>Edukacja</h3>
          <Button
            title={activeSections.education ? 'Zapisz' : 'Edytuj'}
            toggle={() => toggle('education')}
          />
        </div>
        <div className="content-wrap">
          <Textarea value={userData.education} nameValue={'one-column'} />
        </div>
      </section>

      <section className="courses container">
        <div className="title-wrap">
          <h3>Kursy</h3>
          <Button
            title={activeSections.courses ? 'Zapisz' : 'Edytuj'}
            toggle={() => toggle('courses')}
          />
        </div>
        <div className="content-wrap">
          <Textarea value={userData.courses} nameValue={'one-column'} />
        </div>
      </section>

      <section className="work_experience container">
        <div className="title-wrap">
          <h3>Doświadczenie zawodowe</h3>
          <Button
            title={activeSections.workExperience ? 'Zapisz' : 'Edytuj'}
            toggle={() => toggle('workExperience')}
          />
        </div>
        <div className="content-wrap">
          <Textarea
            value={activeSections.workExperience}
            nameValue={'one-column'}
          />
        </div>
      </section>

      <section className="portfolio container">
        <div className="title-wrap">
          <h3>Portfolio</h3>
          <Button
            title={activeSections.portfolio ? 'Zapisz' : 'Edytuj'}
            toggle={() => toggle('portfolio')}
          />
        </div>
        <div className="content-wrap">
          <Textarea value={userData.portfolioUrls} nameValue={'one-column'} />
        </div>
      </section>

      <section className="project container">
        <div className="title-wrap">
          <h3>Projekt na zaliczenie</h3>
          <Button
            title={activeSections.project ? 'Zapisz' : 'Edytuj'}
            toggle={() => toggle('project')}
          />
        </div>
        <div className="content-wrap">
          <Textarea value={userData.projectUrls} nameValue={'one-column'} />
        </div>
      </section>
    </main>
  );
};
