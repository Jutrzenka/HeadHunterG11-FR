import React, {useEffect, useState} from 'react';

import './_ShowCvView.scss';
import { Header } from '../../../components/common/Header/Header';
import { StudentAbout } from '../../../components/common/StudentAbout/StudentAbout';
import { Expectations } from '../../../components/common/Expectations/Expectations';
import { LinkTo } from '../../../components/common/LinkTo/LinkTo';
import { RatingOnCv } from '../../../components/common/RatingOnCv/RatingOnCv';

import './_ShowCvView.scss';
import { ButtonBack } from '../../../components/common/ButtonBack/ButtonBack';
import {useFetch} from "../../../utils/hooks/useFetch";
import {ElementData} from "../../../utils/types/JsonCommunicationType";
import {setUser} from "../../../redux/slice/user";


const initStudent = {
  idUser:'2121dsa',
  firstName:'Test',
  lastName:'Tester',
  active:true,
  id:'2121dsa',
  status:'student',
  courseCompletion:3,
  courseEngagement:4,
  projectDegree:5,
  teamProjectDegree:0,
  bonusProjectUrIs:'',
  tel:666333222,
  email:'test@wp.pl',
  githubUsername:'testGit',
  portfolioUrIs:'',
  bio:'jestem tester',
  expectedTypeWork:'None',
  targetWorkCity:'Poznan',
  expectedContractType:'None',
  expectedSalary:'6000',
  canTakeApprenticeship:false,
  monthsOfCommercialExp:2,
  education:'',
  workExperience:null,
  courses:null,
}

export const ShowCvView = () => {
  const [data,status] = useFetch(`http://localhost:3001/api/user/student`);
  const [student,setStudent] = useState(initStudent)
  console.log(data)

  useEffect(()=>{
    if(data !== undefined && data.success){
      setStudent((data.data as ElementData).value)
    }

  },[data]);

  return (
    <main className={'view-ShowCvView'}>
      <Header />
      <div className="view-ShowCvView-wrap">
        <ButtonBack title="Wróć" className="button-back" />
        <section className="student-contact">
          <StudentAbout
              githubUsername={student.githubUsername}
              firstName={student.firstName}
              lastName={student.lastName}
              tel={student.tel}
              bio={student.bio}
              email={student.email}
          />
        </section>
        <section className="student-rating-wrap">
          <section className="student-rating">
            <h3>Oceny</h3>
            <div className="ratings">
              <RatingOnCv title={'Ocena przejścia kursu'} rating={student.courseCompletion} />
              <RatingOnCv
                title={'Ocena aktywności i zaangażowanie na kursie'}
                rating={student.courseEngagement}
              />
              <RatingOnCv title={'Ocena kodu w projekcie własnym'} rating={student.projectDegree} />
              <RatingOnCv title={'Ocena pracy w zespole w Scrum'} rating={student.teamProjectDegree} />
            </div>
          </section>
          <section className="student-expectations-wrap">
            <h3>Oczekiwania w stosunku do zatrudnienia</h3>
            <div className="expectations">
              <Expectations
                description={'Preferowane miejsce pracy'}
                value={student.expectedTypeWork}
              />
              <Expectations
                description={'Docelowe miasto, gdzie chce pracować kandydat.'}
                value={student.targetWorkCity}
              />
              <Expectations
                description={'Oczekiwany typ kontraktu'}
                value={student.expectedContractType}
              />
              <Expectations
                description={'Oczekiwane wynagrodzenie miesięczne netto'}
                value={student.expectedSalary}
              />
              <Expectations
                description={
                  'Zgoda na odbycie bezpłatnych praktyk/stażu na początek'
                }
                value={`${student.canTakeApprenticeship ? 'Tak' : 'Nie' }`}
              />
              <Expectations
                description={'Komercyjne doświadczenie w programowaniu'}
                value={`${student.monthsOfCommercialExp} miesięcy`}
              />
            </div>
          </section>
          <section className="student-education-wrap">
            <h3>Edukacja</h3>
            <p>
              {student.education}
            </p>
          </section>
          <section className="student-courses-wrap">
            <h3>Kursy</h3>
            <p>
              {student.courses}
            </p>
          </section>
          <section className="student-experience-wrap">
            <h3>Doświadczenie zawodowe</h3>
            <p>
              {student.workExperience}
            </p>
          </section>
          <section className="student-portfolio-wrap">
            <h3>Portfolio</h3>
            <div className="student-portfolio-wrap--link">
              <LinkTo link={student.portfolioUrIs} />
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
              <LinkTo link={'https://Loremipsum/dolor/sit/amet'} />
              <LinkTo link={'https://Loremipsum/dolor/sit/amet'} />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};
