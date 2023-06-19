import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

import "./select.scss";

const a = ({ value, options, onChange }) => {
    const handleOnChange = (v) => {
        onChange(v.value);
    };

    return (
        <Select
            className="select"
            defaultValue={{ value: value, label: value }}
            options={options.map(x => ({ value: x, label: x }))}
            onChange={handleOnChange} />
    );
};

a.propTypes = {
    value: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func
};

export default a;