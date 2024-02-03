import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

export default function Button({ className, onClick, children, ...props }) {
    return (
        <div className={'button ' + className} onClick={onClick} {...props}>
            {children}
        </div>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any,
    props: PropTypes.any,
};
