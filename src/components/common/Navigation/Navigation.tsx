import React from 'react';
import { Link } from 'react-router-dom';

import './_Navigation.scss';

export const Navigation = () => {
  return (
    <nav className={'component-Navigation'}>
      <Link to={'/students'} className="button-active">
        Dostępni kursanci
      </Link>
      <Link to={'/interview'} className="notactive">
        Do rozmowy
      </Link>
    </nav>
  );
};
