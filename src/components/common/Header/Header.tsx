import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { HiLogout } from 'react-icons/hi';
import { useToggle } from '../../../utils/hooks/useToggle';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

import './_Header.scss';

export const Header = () => {
  const { login } = useSelector((state: RootState) => state.user);
  const [value, toggle] = useToggle(false);

  return (
    <header className={'component-Header'}>
      <div className="wrap container">
        <img src="/img/logo_MegaK.png" alt="logo" />
        <div className="user-menu-dropdown">
          <img src="/img/icons/avatar.svg" alt="avatar" />
          <div className="dropdown" onClick={toggle}>
            <p>{login}</p>
            <AiFillCaretDown />
          </div>
        </div>
        {value && (
          <div className="logout">
            <HiLogout />
            <p onClick={toggle}>Wyloguj</p>
          </div>
        )}
      </div>
    </header>
  );
};
