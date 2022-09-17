import React from 'react';
import { Button } from '../Button/Button';
import { FaGithub, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import './_StudentAbout.scss';
interface Props{
  firstName:string;
  lastName:string;
  githubUsername:string;
  tel:number | null;
  email:string;
  bio:string;
}

export const StudentAbout = ({firstName,lastName,githubUsername,tel,email,bio}:Props) => {
  return (
    <div className={'component-StudentAbout'}>
      <div className="student-about-wrap">
        <div className="img-wrap">
          <img src="/img/icons/avatar.svg" alt="avatar" />
          <h3>{firstName} {lastName}</h3>
          <div className="name-github">
            <FaGithub className="github-ico" />
            <p>{githubUsername}</p>
          </div>

          <div className="contact-wrap">
            <div className="contact-phone">
              <FaPhoneAlt className="contact-ico phone" />
              <p>{tel}</p>
            </div>
            <div className="contact-email">
              <MdEmail className="contact-ico email" />
              <p>{email}</p>
            </div>
          </div>
        </div>

        <div className="about-me-wrap">
          <p className="about-me-title">O mnie</p>
          <p className="about-me-">
            {bio}
          </p>
          <div className="action-wrap">
            <Button title={'Brak zainteresowania'} />
            <Button title={'Zatrudniony'} />
          </div>
        </div>
      </div>
    </div>
  );
};
