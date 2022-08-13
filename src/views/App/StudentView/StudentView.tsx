import React from 'react';
import { Header } from '../../../components/common/Header/Header';
import { StudentAbout } from '../../../components/common/StudentAbout/StudentAbout';
import { Expectations } from '../../../components/common/Expectations/Expectations';
import { LinkTo } from '../../../components/common/LinkTo/LinkTo';
import { RatingOnCv } from '../../../components/common/RatingOnCv/RatingOnCv';
import { ButtonBack } from '../../../components/common/ButtonBack/ButtonBack';
import { useFetch } from "../../../utils/hooks/useFetch";
import { useParams } from "react-router-dom";
import './_StudentView.scss';

export const StudentView = () => {
  const {id} = useParams()
  const [data, status] = useFetch(`http://localhost:3001/api/user/students/${id}`);
  console.log(data, status);
  if (status === 'fetched') {
  return (
      <main className={ 'view-StudentView' }>
        <Header/>
        <div className="view-StudentView-wrap">
          <ButtonBack title="Wróć" className="button-back"/>
          <section className="student-contact">
            <StudentAbout/>
          </section>
          <section className="student-rating-wrap">
            <section className="student-rating">
              <h3>Oceny</h3>
              <div className="ratings">
                <RatingOnCv title={ 'Ocena przejścia kursu' } rating={ 5 }/>
                <RatingOnCv
                    title={ 'Ocena aktywności i zaangażowanie na kursie' }
                    rating={ 3 }
                />
                <RatingOnCv title={ 'Ocena kodu w projekcie własnym' } rating={ 4 }/>
                <RatingOnCv title={ 'Ocena pracy w zespole w Scrum' } rating={ 5 }/>
              </div>
            </section>
            <section className="student-expectations-wrap">
              <h3>Oczekiwania w stosunku do zatrudnienia</h3>
              <div className="expectations">
                <Expectations
                    description={ 'Preferowane miejsce pracy' }
                    value={ 'Biuro' }
                />
                <Expectations
                    description={ 'Docelowe miasto, gdzie chce pracować kandydat.' }
                    value={ 'Warszawa' }
                />
                <Expectations
                    description={ 'Oczekiwany typ kontraktu' }
                    value={ 'Umowa o pracę' }
                />
                <Expectations
                    description={ 'Oczekiwane wynagrodzenie miesięczne netto' }
                    value={ '8000 zł' }
                />
                <Expectations
                    description={
                      'Zgoda na odbycie bezpłatnych praktyk/stażu na początek'
                    }
                    value={ 'Tak' }
                />
                <Expectations
                    description={ 'Komercyjne doświadczenie w programowaniu' }
                    value={ '6 miesięcy' }
                />
              </div>
            </section>
            <section className="student-education-wrap">
              <h3>Edukacja</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium beatae dignissimos dolorem dolores eaque eius, error
                eum ipsum labore laboriosam minima nisi optio perferendis quas
                quasi qui sed sint, temporibus.
              </p>
            </section>
            <section className="student-courses-wrap">
              <h3>Kursy</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium beatae dignissimos dolorem dolores eaque eius, error
                eum ipsum labore laboriosam minima nisi optio perferendis quas
                quasi qui sed sint, temporibus.
              </p>
            </section>
            <section className="student-experience-wrap">
              <h3>Doświadczenie zawodowe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium beatae dignissimos dolorem dolores eaque eius, error
                eum ipsum labore laboriosam minima nisi optio perferendis quas
                quasi qui sed sint, temporibus.
              </p>
            </section>
            <section className="student-portfolio-wrap">
              <h3>Portfolio</h3>
              <div className="student-portfolio-wrap--link">
                <LinkTo link={ 'https://Loremipsum/dolor/sit/amet' }/>
              </div>
            </section>
            <section className="student-portfolio-wrap">
              <h3>Projekt w zespole Scrumowym</h3>
              <div className="student-portfolio-wrap--link">
                <LinkTo
                    link={
                      'https://github.com/Ami777/MegaKursTest/comits?author=Ami777'
                    }
                />
                <LinkTo
                    link={
                      'https://github.com/Ami777/MegaKursTest/pulls?q=is%3Apr+reviewed-by%3AAmi777'
                    }
                />
              </div>
            </section>
            <section className="student-portfolio-wrap">
              <h3>Projekt na zaliczenie</h3>
              <div className="student-portfolio-wrap--link">
                <LinkTo link={ 'https://Loremipsum/dolor/sit/amet' }/>
                <LinkTo link={ 'https://Loremipsum/dolor/sit/amet' }/>
              </div>
            </section>
          </section>
        </div>
      </main>
  );
} else {
    return (
        <div>POBIERAM DANE</div>
    )
  }
};

