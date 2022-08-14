import React, { SyntheticEvent, useState } from 'react';
import { Header } from '../../../components/common/Header/Header';
import { Input } from '../../../components/common/Input/Input';
import { Button } from '../../../components/common/Button_v2/Button';
import { Textarea } from '../../../components/common/Textarea/Textarea';
import { Select } from '../../../components/common/Select_v2/Select';
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

    expectedTypeWork: 'Bez znaczenia',
    targetWorkCity: '',
    expectedContractType: 'Brak preferencji',
    expectedSalary: '',
    canTakeApprenticeship: 'TAK',
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
    // console.log(e);
    // setUserDAta(e);
    console.log('Fetch- wysłanie nowych danych na backend');
  };

  return (
    <main className={'view-EditCvView'}>
      <Header />
      <Form formInitialValues={userData} functionToForm={onSubmit}>
        <section className={`about container`}>
          <div className="title-wrap">
            <h3>Ogólne</h3>
            <Button
              type={!activeSections.about ? 'submit' : 'button'}
              className={activeSections.about ? 'save-button' : 'edit-button'}
              title={activeSections.about ? 'Zapisz' : 'Edytuj'}
              toggle={() => toggle('about')}
            />
          </div>

          <div className="content-wrap">
            <Input
              name={'email'}
              title={'Adres e-mail'}
              type={'text'}
              disabled={!activeSections.about}
            />
            <Input
              name={'tel'}
              title={'Nr tel.'}
              type={'text'}
              disabled={!activeSections.about}
            />
            <Input
              name={'firstName'}
              title={'Imię'}
              type={'text'}
              disabled={!activeSections.about}
            />
            <Input
              name={'lastName'}
              title={'Nazwisko'}
              type={'text'}
              disabled={!activeSections.about}
            />
            <Input
              name={'githubUsername'}
              title={'Login GitHub'}
              type={'text'}
              disabled={!activeSections.about}
            />
            <Textarea
              name={'bio'}
              nameValue={'bio'}
              title={'O mnie'}
              disabled={!activeSections.about}
            />
          </div>
        </section>

        <section className="hireExpectations container">
          <div className="title-wrap">
            <h3>Oczekiwania w stosunku do zatrudnienia</h3>
            <Button
              type={!activeSections.hireExpectations ? 'submit' : 'button'}
              className={
                activeSections.hireExpectations ? 'save-button' : 'edit-button'
              }
              title={activeSections.hireExpectations ? 'Zapisz' : 'Edytuj'}
              toggle={() => toggle('hireExpectations')}
            />
          </div>

          <div className="content-wrap">
            <Select
              name={'expectedTypeWork'}
              title={'Preferowane miejsce pracy'}
              selects={[
                'Na miejscu',
                'Gotowość do przeprowadzki',
                'Wyłącznie zdalnie',
                'Hybrydowo',
                'Bez znaczenia',
              ]}
              disabled={!activeSections.hireExpectations}
            />

            <Input
              name={'targetWorkCity'}
              title={'Docelowe miasto, gdzie chce pracować kandydat'}
              type={'text'}
              disabled={!activeSections.hireExpectations}
            />

            <Select
              name={'expectedContractType'}
              title={'Oczekiwany typ kontraktu'}
              selects={[
                'Tylko UoP',
                'Możliwe B2B',
                'Możliwe UZ/UoD',
                'Brak preferencji',
              ]}
              disabled={!activeSections.hireExpectations}
            />

            <Input
              name={'expectedSalary'}
              title={'Oczekiwane wynagrodzenie miesięczne netto'}
              type={'number'}
              disabled={!activeSections.hireExpectations}
            />

            <Radio
              name={'canTakeApprenticeship'}
              title={'Zgoda na odbycie bezpłatnych praktyk/stażu na początek'}
              selects={['TAK', 'NIE']}
              disabled={!activeSections.hireExpectations}
            />

            <Input
              name={'monthsOfCommercialExp'}
              title={'Komercyjne doświadczenie w programowaniu'}
              type={'number'}
              disabled={!activeSections.hireExpectations}
            />
          </div>
        </section>

        <section className="education container">
          <div className="title-wrap">
            <h3>Edukacja</h3>
            <Button
              type={!activeSections.education ? 'submit' : 'button'}
              className={
                activeSections.education ? 'save-button' : 'edit-button'
              }
              title={activeSections.education ? 'Zapisz' : 'Edytuj'}
              toggle={() => toggle('education')}
            />
          </div>
          <div className="content-wrap">
            <Textarea
              name={'education'}
              nameValue={'one-column'}
              disabled={!activeSections.education}
            />
          </div>
        </section>

        <section className="courses container">
          <div className="title-wrap">
            <h3>Kursy</h3>
            <Button
              type={!activeSections.courses ? 'submit' : 'button'}
              className={activeSections.courses ? 'save-button' : 'edit-button'}
              title={activeSections.courses ? 'Zapisz' : 'Edytuj'}
              toggle={() => toggle('courses')}
            />
          </div>
          <div className="content-wrap">
            <Textarea
              name={'courses'}
              nameValue={'one-column'}
              disabled={!activeSections.courses}
            />
          </div>
        </section>

        <section className="work_experience container">
          <div className="title-wrap">
            <h3>Doświadczenie zawodowe</h3>
            <Button
              type={!activeSections.workExperience ? 'submit' : 'button'}
              className={
                activeSections.workExperience ? 'save-button' : 'edit-button'
              }
              title={activeSections.workExperience ? 'Zapisz' : 'Edytuj'}
              toggle={() => toggle('workExperience')}
            />
          </div>
          <div className="content-wrap">
            <Textarea
              name={'workExperience'}
              nameValue={'one-column'}
              disabled={!activeSections.workExperience}
            />
          </div>
        </section>

        <section className="portfolio container">
          <div className="title-wrap">
            <h3>Portfolio</h3>
            <Button
              type={!activeSections.portfolio ? 'submit' : 'button'}
              className={
                activeSections.portfolio ? 'save-button' : 'edit-button'
              }
              title={activeSections.portfolio ? 'Zapisz' : 'Edytuj'}
              toggle={() => toggle('portfolio')}
            />
          </div>
          <div className="content-wrap">
            <Textarea
              name={'portfolioUrls'}
              nameValue={'one-column'}
              disabled={!activeSections.portfolio}
            />
          </div>
        </section>

        <section className="project container">
          <div className="title-wrap">
            <h3>Projekt na zaliczenie</h3>
            <Button
              type={!activeSections.project ? 'submit' : 'button'}
              className={activeSections.project ? 'save-button' : 'edit-button'}
              title={activeSections.project ? 'Zapisz' : 'Edytuj'}
              toggle={() => toggle('project')}
            />
          </div>
          <div className="content-wrap">
            <Textarea
              name={'projectUrls'}
              nameValue={'one-column'}
              disabled={!activeSections.project}
            />
          </div>
        </section>
      </Form>
    </main>
  );
};
