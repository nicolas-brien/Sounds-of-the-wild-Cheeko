import React from 'react';

import NavLink from './NavLink';

import './nav-bar.scss';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/training">Training</NavLink>
            <NavLink to="/daw">DAW</NavLink>
            <NavLink to="piano">Piano</NavLink>
            <NavLink to="2048">2048</NavLink>
            <NavLink to="settings">Settings</NavLink>
        </div>
    );
};

export default NavBar;
