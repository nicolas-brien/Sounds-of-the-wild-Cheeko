import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

const Input = ({ type, value, onChange }) => {
    return <input type={type} className="input" value={value} onChange={(e) => onChange(e.target.value)} />;
};

Input.defaultProps = {
    type: 'text',
};

Input.propTypes = {
    type: PropTypes.any,
    value: PropTypes.any,
    onChange: PropTypes.func,
};

export default Input;
