import React from 'react';
import { Button } from '../Button/Button';
import { FaGithub, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import './_StudentAbout.scss';

export const StudentAbout = () => {
  return (
    <div className={'component-StudentAbout'}>
      <div className="student-about-wrap">
        <div className="img-wrap">
          <img src="/img/icons/avatar.svg" alt="avatar" />
          <h3>Jan Kowalski</h3>
          <div className="name-github">
            <FaGithub className="github-ico" />
            <p>jankowalski</p>
          </div>

          <div className="contact-wrap">
            <div className="contact-phone">
              <FaPhoneAlt className="contact-ico phone" />
              <p>+48 566 072 227</p>
            </div>
            <div className="contact-email">
              <MdEmail className="contact-ico email" />
              <p>jankowalski@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="about-me-wrap">
          <p className="about-me-title">O mnie</p>
          <p className="about-me-">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            deserunt eligendi harum hic! Fugit rerum, temporibus. Aut error
            expedita iusto labore molestiae natus officiis
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
