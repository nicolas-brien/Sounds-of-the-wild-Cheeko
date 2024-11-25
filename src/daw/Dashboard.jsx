import React, { useState } from "react";

import { useFrequency } from "react-frequency";

import Button from "../components/button/Button";
import Slider from "../components/slider/Slider";
import Select from "../components/select/Select";

import "./dashboard.scss";

const typeValues = ["center", "left", "right"];
const oscillatorValues = ["sine", "sawtooth", "square", "triangle"];

const defaultValues = {
    frequency: 200,
    type: typeValues[0],
    gain: 50,
    oscillator: oscillatorValues[0]
};

const Dashboard = () => {
    const [frequency, setFrequency] = useState(defaultValues.frequency);
    const [gain, setGain] = useState(defaultValues.gain);
    const [type, setType] = useState(defaultValues.type);
    const [oscillator, setOscillator] = useState(defaultValues.oscillator);

    const { start, stop } = useFrequency({
        hz: frequency,
        type,
        gain: gain / 100,
        oscillator
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
        setType(v);
    };

    const handleOscillatorChange = (v) => {
        setOscillator(v);
    };

    return (
        <div className="dashboard">
            <div className="dashboard__controls">
                <Button onClick={start}>Start</Button>
                <Button onClick={stop}>Stop</Button>
                <Button onClick={handleReset}>Reset</Button>
            </div>
            <h6>Frequency</h6>
            <Slider min={0} max={400} value={frequency} onChange={handleFrequencyChange} />
            <h6>Gain</h6>
            <Slider min={0} max={100} value={gain} onChange={handleGainChange} />
            <h6>Type</h6>
            <Select value={type} options={typeValues} onChange={handleTypeChange} />
            <h6>Oscillator</h6>
            <Select value={oscillator} options={oscillatorValues} onChange={handleOscillatorChange} />
        </div>
    );
};

export default Dashboard;