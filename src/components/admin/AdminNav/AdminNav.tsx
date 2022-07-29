import React from 'react';
import { NavLink } from 'react-router-dom';
import './_AdminNav.scss';

export const AdminNav = () => {
  return (
    <div className="component-AdminNav">
      <div className="logo-wrap">
        <img src="/img/logo_MegaK.png" alt="logo" />
        <h1>Panel Administratora</h1>
      </div>

      <nav className="nav">
        <NavLink to="/list">Lista kursantow </NavLink>
        <NavLink to="/add">Dodaj liste kursantow</NavLink>
        <NavLink to="/add">Wyloguj się</NavLink>
      </nav>
    </div>
  );
};
