import React from "react";
import ReactSlider from "react-slider";
import PropTypes from "prop-types";

import "./slider.scss";

const Slider = ({ value, min, max, onChange }) => {
    return (
        <ReactSlider
            className="slider"
            thumbClassName="slider-thumb"
            trackClassName="slider-track"
            value={value} min={min} max={max}
            onChange={onChange} />
    );
};

Slider.propTypes = {
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func
};

export default Slider;