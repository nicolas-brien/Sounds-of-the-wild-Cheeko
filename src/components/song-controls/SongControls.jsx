import React, { useRef, useState } from 'react';

import { useData } from '../../contexts/Data';
import { useSong } from '../../contexts/SongContext';

// import Button from '../button/Button';
import Input from '../input/Input';
import IconButton from '../button/IconButton';

import { ReactComponent as Trash } from '../../svg/trash.svg';
import { ReactComponent as Gear } from '../../svg/gear.svg';
import { ReactComponent as Play } from '../../svg/play.svg';
import { ReactComponent as Pause } from '../../svg/pause.svg';
import { ReactComponent as Stop } from '../../svg/stop.svg';
import { ReactComponent as Save } from '../../svg/save.svg';
import { ReactComponent as Load } from '../../svg/load.svg';

import './song-controls.scss';

const SongControls = () => {
    const { tracks, loadTracks, play, pause, stop, isPlaying, delay, setDelay, duration, setDuration } = useSong();
    const { save, load } = useData();
    const ref = useRef();

    const [name, setName] = useState('');
    const [showParams, setShowParams] = useState(false);

    const handleLoadClick = () => {
        ref.current.click();
    };

    const loadFile = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        var file = e.target.files[0];
        loadTracks(await load(file));
        ref.current.value = '';
    };

    const onClear = () => {
        if (confirm('clear?')) {
            loadTracks([]);
            stop();
        }
    };

    return (
        <div className="song-controls">
            <div className="song-controls__file">
                <Input value={name} onChange={setName} />
                <IconButton onClick={() => save(name, tracks)} icon={<Save />} />
                <IconButton onClick={handleLoadClick} icon={<Load />} />
                <input style={{ display: 'none' }} type="file" ref={ref} onChange={loadFile} />

                <IconButton
                    onClick={() => {
                        setShowParams(!showParams);
                    }}
                    icon={<Gear />}
                />
            </div>
            {showParams && (
                <div className="song-controls__params">
                    Tick: <Input type="number" value={delay} onChange={(e) => setDelay(Number(e))} />
                    Duration: <Input type="number" value={duration} onChange={(e) => setDuration(Number(e))} />
                </div>
            )}
            <div className="song-controls__controls">
                <IconButton icon={isPlaying ? <Pause /> : <Play />} onClick={isPlaying ? pause : play} />
                <IconButton icon={<Stop />} onClick={stop} />
                <IconButton onClick={onClear} icon={<Trash />} />
            </div>
        </div>
    );
};

export default SongControls;
