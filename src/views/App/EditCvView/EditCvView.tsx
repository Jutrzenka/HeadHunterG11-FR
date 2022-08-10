import React, { SyntheticEvent, useState } from 'react';
import { Header } from '../../../components/common/Header/Header';
import { Input } from '../../../components/common/Input/Input';
import { Button } from '../../../components/common/Button/Button';
import { Textarea } from '../../../components/common/Textarea/Textarea';
import { Select } from '../../../components/common/Select/Select';
import { Radio } from '../../../components/common/Radio/Radio';
import './_EditCvView.scss';
import { Form } from '../../../components/common/Form/Form';

export const EditCvView = () => {
  const [userData, setUserDAta] = useState({
    email: 'test@tlen.pl',
    tel: '123123123',
    firstName: 'Jan',
    lastName: 'Kowalski',
    githubUsername: 'Janek',
    bio: 'Test \ndddd\nfd\nd\n\ndddd',

    expectedTypeWork: '',
    targetWorkCity: '',
    expectedContractType: '',
    expectedSalary: '',
    canTakeApprenticeship: '',
    monthsOfCommercialExp: '',

    education: '',
    courses: '',
    workExperience: '',
    portfolioUrls: '',
    projectUrls: '',
  });

  const [activeSections, setActiveSections] = useState({
    about: false,
    hireExpectations: false,
    education: false,
    courses: false,
    workExperience: false,
    portfolio: false,
    project: false,
  });

  const toggle = (key: string) => {
    const index = Object.keys(activeSections).indexOf(key);
    const value = Object.values(activeSections)[index];

    setActiveSections((prevState) => {
      return {
        ...prevState,
        [key]: !value,
      };
    });
  };

  const onSubmit = (e: any) => {
    // e.preventDefault();
    console.log(e);
    console.log('Fetch- wysłanie nowych danych na backend');
  };

  //TODO: "canTakeApprenticeship, expectedContractType, expectedTypeWork nie działają w formularzu"

  return (
    <main className={'view-EditCvView'}>
      <Header />
      {/*##FORMULARZ */}
      <Form formInitialValues={userData} functionToForm={onSubmit}>
        <section className="about container">
          <div className="title-wrap">
            <h3>Ogólne</h3>
            <Button
              // type={'submit'}
              title={activeSections.about ? 'Zapisz' : 'Edytuj'}
              toggle={() => toggle('about')}
            />
          </div>

          {/*<Input*/}
          {/*  name={'submito'}*/}
          {/*  value={userData.about.email}*/}
          {/*  type={'submit'}*/}
          {/*/>*/}

          <div className="content-wrap">
            <Input
              name={'email'}
              title={'Adres e-mail'}
              // value={userData.email}
              type={'text'}
            />
            <Input
              name={'tel'}
              title={'Nr tel.'}
              // value={userData.tel}
              type={'text'}
            />
            <Input
              name={'firstName'}
              title={'Imię'}
              // value={userData.firstName}
              type={'text'}
            />
            <Input
              name={'lastName'}
              title={'Nazwisko'}
              // value={userData.lastName}
              type={'text'}
            />
            <Input
              name={'githubUsername'}
              title={'Login GitHuba'}
              // value={userData.githubUsername}
              type={'text'}
            />
            <Textarea
              name={'bio'}
              nameValue={'bio'}
              title={'Krótkie bio'}
              // value={userData.bio}
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
              // name={'expectedTypeWork'}
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
              name={'targetWorkCity'}
              title={'Docelowe miasto, gdzie chce pracować kandydat'}
              // value={userData.email}
              type={'text'}
            />

            <Select
              // name={'expectedContractType'}
              title={'Oczekiwany typ kontraktu'}
              selects={[
                'Tylko UoP',
                'Możliwe B2B',
                'Możliwe UZ/UoD',
                'Brak preferencji',
              ]}
            />

            <Input
              name={'expectedSalary'}
              title={'Oczekiwane wynagrodzenie miesięczne netto'}
              // value={userData.expectedSalary}
              type={'number'}
            />

            <Radio
              name={'canTakeApprenticeship'}
              title={'Zgoda na odbycie bezpłatnych praktyk/stażu na początek'}
              selects={['TAK', 'NIE']}
            />

            <Input
              name={'monthsOfCommercialExp'}
              title={'Komercyjne doświadczenie w programowaniu'}
              // value={userData.monthsOfCommercialExp}
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
            <Textarea
              name={'education'}
              // value={userData.education}
              nameValue={'one-column'}
            />
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
            <Textarea
              name={'courses'}
              // value={userData.courses}
              nameValue={'one-column'}
            />
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
              name={'workExperience'}
              // value={activeSections.workExperience}
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
            <Textarea
              name={'portfolioUrls'}
              // value={userData.portfolioUrls}
              nameValue={'one-column'}
            />
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
            <Textarea
              name={'projectUrls'}
              // value={userData.projectUrls}
              nameValue={'one-column'}
            />
          </div>
        </section>
      </Form>
    </main>
  );
};
