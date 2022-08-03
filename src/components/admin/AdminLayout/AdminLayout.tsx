import React, { ReactElement } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useToggle } from '../../../utils/hooks/useToggle';

import { AdminNav } from '../AdminNav/AdminNav';
import { Header } from '../../common/Header/Header';

import './_AdminLayout.scss';

interface Props {
  children: ReactElement[];
}

export const AdminLayout = ({ children }: Props) => {
  const [value, toggle] = useToggle(true);

  return (
    <div className="component-admin-layout">
      <nav className="menu">
        <AdminNav />
      </nav>
      <section className={!value ? 'showcase' : 'showcase active'}>
        <div className="header-and-hamburger-wrap">
          {value ? (
            <AiOutlineClose onClick={toggle} />
          ) : (
            <GiHamburgerMenu onClick={toggle} />
          )}
          <Header />
        </div>
        <div className="main-panel">{children}</div>
      </section>
    </div>
  );
};
