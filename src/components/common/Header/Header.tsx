import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { HiLogout } from 'react-icons/hi';

import './_Header.scss';

export const Header = () => {
  const [drop, setDrop] = useState(false);

  const toggle = () => {
    setDrop(!drop);
  };

  return (
    <header>
      <div className="wrap container">
        <img src="/img/logo_MegaK.png" alt="logo" />
        <div className="user-menu-dropdown">
          <img src="/img/icons/avatar.svg" alt="avatar" />
          <div className="dropdown" onClick={toggle}>
            <p>Imie Nazwisko</p>
            <AiFillCaretDown />
          </div>
        </div>
        {drop && (
          <div className="logout">
            <HiLogout />
            <p onClick={toggle}>Wyloguj</p>
          </div>
        )}
      </div>
    </header>
  );
};
