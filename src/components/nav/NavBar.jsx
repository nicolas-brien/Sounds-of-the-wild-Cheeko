import React from "react";

import NavLink from "./NavLink";

import "./nav-bar.scss";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <NavLink to="/">Hymn</NavLink>
            <NavLink to="settings">Settings</NavLink>
        </div>
    );
};

export default NavBar;