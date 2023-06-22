import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFrequency } from 'react-frequency';

import Button from '../button/Button';
import Slider from '../slider/Slider';
import Select from '../select/Select';

import Types from '../../consts/types';
import Oscillators from '../../consts/oscillators';

import './block-controls.scss';

const BlockControls = ({ freq, gain, type, osc, len, onSave }) => {
    const [localFreq, setLocalFreq] = useState(freq);
    const [localGain, setLocalGain] = useState(gain);
    const [localType, setLocalType] = useState(type);
    const [localOsc, setLocalOsc] = useState(osc);
    const [localLen, setLocalLen] = useState(len / 100);

    const { start, stop, playing } = useFrequency({
        hz: localFreq,
        type: localType,
        gain: localGain / 100,
        oscillator: localOsc,
    });

    const handlePlayPause = () => {
        playing ? stop() : start();
    };

    const handleReset = () => {
        setLocalFreq(freq);
        setLocalGain(gain);
        setLocalType(type);
        setLocalOsc(osc);
        setLocalLen(len / 100);
    };

    const handleSave = () => {
        onSave({ freq: localFreq, gain: localGain, type: localType, osc: localOsc, len: localLen * 100 });
    };

    const handleFrequencyChange = (v) => {
        setLocalFreq(v);
    };

    const handleFrequencyChange2 = (v) => {
        setLocalFreq(v.target.value);
    };

    const handleGainChange = (v) => {
        setLocalGain(v);
    };

    const handleTypeChange = (v) => {
        setLocalType(v.value);
    };

    const handleOscillatorChange = (v) => {
        setLocalOsc(v.value);
    };

    const handleLengthChange = (v) => {
        setLocalLen(v);
    };

    return (
        <div className="block-controls">
            <div className="block-controls__controls">
                <Button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</Button>
                <Button onClick={handleReset}>Reset</Button>
                <Button onClick={handleSave}>Save</Button>
            </div>
            <div className="block-controls__modifiers"></div>
            <p>Frequency:</p>
            <input value={localFreq} onChange={handleFrequencyChange2} type="number" />
            <Slider min={50} max={800} value={localFreq} onChange={handleFrequencyChange} />
            <p>Gain: {localGain}</p>
            <Slider min={0} max={100} value={localGain} onChange={handleGainChange} />
            <p>Length: {localLen * 100}</p>
            <Slider min={0} max={10} value={localLen} marks onChange={handleLengthChange} />
            <p>Type</p>
            <Select value={localType} options={Types} onChange={handleTypeChange} />
            <p>Oscillator</p>
            <Select value={localOsc} options={Oscillators} onChange={handleOscillatorChange} />
        </div>
    );
};

BlockControls.propTypes = {
    freq: PropTypes.number,
    gain: PropTypes.number,
    type: PropTypes.string,
    osc: PropTypes.string,
    len: PropTypes.number,
    onSave: PropTypes.func,
};

export default BlockControls;
