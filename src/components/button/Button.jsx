import React from "react";
import PropTypes from "prop-types";

import "./button.scss";

export default function Button({ onClick, children }) {
    return (
        <div className="button" onClick={onClick}>
            {children}
        </div>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any
};