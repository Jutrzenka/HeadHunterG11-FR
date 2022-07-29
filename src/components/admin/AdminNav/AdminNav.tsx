import React from 'react';
import { NavLink } from 'react-router-dom';
import './_AdminNav.scss';

export const AdminNav = () => {
  return (
    <div className="component-AdminNav">
      <nav className="nav">
        <NavLink to="/add">Dodaj liste kursantow</NavLink>
        <NavLink to="/list">Lista kursantow admina</NavLink>
      </nav>
    </div>
  );
};
