import React, { useState } from 'react';
import { useFrequency } from 'react-frequency';

import Button from '../button/Button';
import Slider from '../slider/Slider';
import Select from '../select/Select';

import defaultValues from '../../consts/defaultSoundValues';
import Types from '../../consts/types';
import Oscillators from '../../consts/oscillators';

import './controls.scss';

const Controls = () => {
    const [frequency, setFrequency] = useState(defaultValues.frequency);
    const [gain, setGain] = useState(defaultValues.gain);
    const [type, setType] = useState(defaultValues.type);
    const [oscillator, setOscillator] = useState(defaultValues.oscillator);

    const { start, stop } = useFrequency({
        hz: frequency,
        type,
        gain: gain / 100,
        oscillator,
    });

    const handleReset = () => {
        setFrequency(defaultValues.frequency);
        setGain(defaultValues.gain);
        setType(defaultValues.type);
        setOscillator(defaultValues.oscillator);
    };

    const handleFrequencyChange = (v) => {
        setFrequency(v);
    };

    const handleGainChange = (v) => {
        setGain(v);
    };

    const handleTypeChange = (v) => {
        setType(v.value);
    };

    const handleOscillatorChange = (v) => {
        setOscillator(v.value);
    };

    return (
        <div className="controls">
            <div className="controls__controls">
                <Button onClick={start}>Start</Button>
                <Button onClick={stop}>Stop</Button>
                <Button onClick={handleReset}>Reset</Button>
            </div>
            <div className="controls__modifiers"></div>
            <p>Frequency: {frequency}</p>
            <Slider min={0} max={400} value={frequency} onChange={handleFrequencyChange} />
            <p>Gain: {gain}</p>
            <Slider min={0} max={100} value={gain} onChange={handleGainChange} />
            <p>Type</p>
            <Select value={type} options={Types} onChange={handleTypeChange} />
            <p>Oscillator</p>
            <Select value={oscillator} options={Oscillators} onChange={handleOscillatorChange} />
        </div>
    );
};

export default Controls;
