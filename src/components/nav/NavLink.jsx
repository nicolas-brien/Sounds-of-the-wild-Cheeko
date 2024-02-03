import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./nav-link.scss";

const NavLink = ({ to, children }) => {
    return (
        <Link className="nav-link" to={to}>
            {children}
        </Link>
    );
};

NavLink.propTypes = {
    to: PropTypes.string,
    children : PropTypes.any
}

export default NavLink;