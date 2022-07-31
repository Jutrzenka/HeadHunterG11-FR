import React, { useState, ReactElement } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { AdminNav } from '../AdminNav/AdminNav';
import { Header } from '../../common/Header/Header';

import './_AdminLayout.scss';

interface Props {
  children: ReactElement[];
}

export const AdminLayout = ({ children }: Props) => {
  const [toggle, setToggle] = useState(false);

  const toggleAcordion = () => {
    setToggle(!toggle);
  };

  return (
    <div className="component-admin-layout">
      <nav className="menu">
        <AdminNav />
      </nav>
      <section className={!toggle ? 'showcase' : 'showcase active'}>
        <div className="header-and-hamburger-wrap">
          {toggle ? (
            <AiOutlineClose onClick={toggleAcordion} />
          ) : (
            <GiHamburgerMenu onClick={toggleAcordion} />
          )}
          <Header />
        </div>
        <div className="main-panel">{children}</div>
      </section>
    </div>
  );
};
