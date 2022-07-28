import React from 'react';
import {NavLink} from "react-router-dom";
export const AdminNav = () => {
    return <div className="nav__container">
        <nav className='nav'>
            <NavLink to="/add">Dodaj liste kursantow</NavLink>
            <NavLink to="/list">Lista kursantow admina</NavLink>
        </nav>
    </div>;
};
