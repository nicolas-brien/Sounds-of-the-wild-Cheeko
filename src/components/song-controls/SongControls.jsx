import React from 'react';

import Button from '../button/Button';

import { useSong } from '../../contexts/SongContext';

import './song-controls.scss';

const SongControls = () => {
    const { play, pause, stop } = useSong();

    return (
        <div className="song-controls">
            <Button onClick={play}>Play</Button>
            <Button onClick={pause}>Pause</Button>
            <Button onClick={stop}>Stop</Button>
        </div>
    );
};

export default SongControls;
