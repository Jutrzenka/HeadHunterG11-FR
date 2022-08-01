import React from 'react';
import { Link } from 'react-router-dom';

import './_Navigation.scss';

interface Props {
  active: string;
  activeText: string;
  noActiveText: string;
}

export const Navigation = ({ active, activeText, noActiveText }: Props) => {
  return (
    <nav className={'component-Navigation'}>
      <Link to={'/students'} className={active}>
        {activeText}
      </Link>
      <Link to={'/interview'} className="notactive">
        {noActiveText}
      </Link>
    </nav>
  );
};
