import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

export default function Button({ onClick, children, ...props }) {
    return (
        <div className="button" onClick={onClick} {...props}>
            {children}
        </div>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any,
    props: PropTypes.any,
};
