import React from 'react';
import { Button } from '../Button/Button';
import { FaGithub, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import './_StudentAbout.scss';

export const StudentAbout = () => {
  return (
    <div className={'component-StudentAbout'}>
      <div className="student-about-wrap">
        <div className="img-wrap">
          <img src="/img/icons/avatar.svg" alt="avatar" />
          <h3>Jan Kowalski</h3>
          <div>
            <FaGithub />
            <p>jankowalski</p>
          </div>
        </div>

        <div className="contact-wrap">
          <div>
            <FaPhone />
            <p>+48 566 072 227</p>
          </div>

          <div>
            <MdEmail />
            <p>jankowalski@gmail.com</p>
          </div>
        </div>
      </div>

      <div>
        <p>O mnie</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          deserunt eligendi harum hic! Fugit rerum, temporibus. Aut error
          expedita iusto labore molestiae natus officiis, perspiciatis quibusdam
          quisquam ratione velit voluptatum!
        </p>
      </div>

      <div className="action-wrap">
        <Button title={'Brak zainteresowania'} />
        <Button title={'Zatrudniony'} />
      </div>
    </div>
  );
};
