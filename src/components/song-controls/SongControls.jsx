import React, { useRef, useState } from 'react';

import Button from '../button/Button';

import { useData } from '../../contexts/Data';
import { useSong } from '../../contexts/SongContext';

import './song-controls.scss';

const SongControls = () => {
    const { tracks, loadTracks, play, pause, stop, isPlaying, delay, setDelay, duration, setDuration } = useSong();
    const { save, load } = useData();
    const ref = useRef();

    const [name, setName] = useState('');

    const loadFile = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        var file = e.target.files[0];
        loadTracks(await load(file));
        ref.current.value = '';
    };

    return (
        <div className="song-controls">
            <div className="song-controls__file">
                Name: <input value={name} onChange={(e) => setName(e.target.value)}></input>
                <input type="file" ref={ref} onChange={loadFile} />
                <Button onClick={() => save(name, tracks)}>Save</Button>
                <Button onClick={() => loadTracks([])}>Clear</Button>
            </div>
            <div className="song-controls__params">
                Tick: <input type="number" value={delay} onChange={(e) => setDelay(Number(e.target.value))} />
                Duration: <input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} />
            </div>
            <div className="song-controls__controls">
                <Button onClick={isPlaying ? pause : play}>{isPlaying ? 'Pause' : 'Play'}</Button>
                <Button onClick={stop}>Stop</Button>
            </div>
        </div>
    );
};

export default SongControls;
