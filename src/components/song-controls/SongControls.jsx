import React from 'react';

import Button from '../button/Button';

import { useSong } from '../../contexts/SongContext';

import './song-controls.scss';

const SongControls = () => {
    const { play, pause, stop, isPlaying } = useSong();

    return (
        <div className="song-controls">
            <Button onClick={isPlaying ? pause : play}>{isPlaying ? 'Pause' : 'Play'}</Button>
            <Button onClick={stop}>Stop</Button>
        </div>
    );
};

export default SongControls;
