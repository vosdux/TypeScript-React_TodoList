import React, { FC } from 'react';
import { NavLink } from 'react-router-dom'

export const Navbar: FC = () => (
    <nav>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">TypeScript</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Список дел</NavLink></li>
                <li><NavLink to="/about">Информация</NavLink></li>
            </ul>
        </div>
    </nav>
);
