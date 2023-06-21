import React from 'react';
import PropTypes from 'prop-types';

import BlockControls from '../controls/BlockControls';

import './block.scss';

const Block = ({ index, freq, gain, type, osc, min, max, beg, end, onSave, selected, onSelect, onDeselect }) => {
    const classNames = 'block' + (selected ? ' block--selected' : '');

    const select = () => {
        selected ? onDeselect() : onSelect();
    };

    const handleSave = (params) => {
        onSave({ index, freq: params.freq, gain: params.gain, type: params.type, osc: params.osc });
        onDeselect();
    };

    const style = {
        left: ((min + beg) / max) * 100 + '%',
        width: ((end - beg) / max) * 100 + '%',
    };

    return (
        <div className={classNames} style={style}>
            <div onClick={select}>
                {freq}hz
                <br />
                {gain}/100
                <br />
                {type}
                <br />
                {osc}
            </div>
            {selected && <BlockControls freq={freq} gain={gain} type={type} osc={osc} onSave={handleSave} />}
        </div>
    );
};

Block.propTypes = {
    index: PropTypes.number,
    freq: PropTypes.number,
    gain: PropTypes.number,
    type: PropTypes.string,
    osc: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    beg: PropTypes.number,
    end: PropTypes.number,
    onSave: PropTypes.func,
    selected: PropTypes.bool,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
};

export default Block;
