import React from "react";
import PropTypes from "prop-types";
import Dropdown from "react-dropdown";

import "./select.scss";

const Select = ({ value, options, onChange }) => {
    return (
        <Dropdown
            className="select"
            value={value}
            options={options}
            onChange={onChange} />
    );
};

Select.propTypes = {
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func
};

export default Select;