import React from 'react';

import Button from '../button/Button';

import { useSong } from '../../contexts/SongContext';

import './song-controls.scss';

const SongControls = () => {
    const { play, pause, stop, isPlaying, delay, setDelay, duration, setDuration } = useSong();

    return (
        <div className="song-controls">
            <Button onClick={isPlaying ? pause : play}>{isPlaying ? 'Pause' : 'Play'}</Button>
            <Button onClick={stop}>Stop</Button>
            Tick: <input type="number" value={delay} onChange={(e) => setDelay(Number(e.target.value))} />
            Duration: <input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} />
        </div>
    );
};

export default SongControls;
