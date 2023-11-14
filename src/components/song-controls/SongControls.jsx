import React, { useRef, useState } from 'react';

import { useData } from '../../contexts/Data';
import { useSong } from '../../contexts/SongContext';

import Button from '../button/Button';
import Input from '../input/Input';
import IconButton from '../button/IconButton';
import { ReactComponent as Trash } from '../../svg/trash.svg';
import { ReactComponent as Gear } from '../../svg/gear.svg';
import { ReactComponent as Play } from '../../svg/play.svg';
import { ReactComponent as Pause } from '../../svg/pause.svg';
import { ReactComponent as Stop } from '../../svg/stop.svg';
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
                Name: <Input value={name} onChange={setName} />
                <Button onClick={() => save(name, tracks)}>Save</Button>
                <Button className="song-controls__load-file" onClick={handleLoadClick}>
                    Load
                    <input style={{ display: 'none' }} type="file" ref={ref} onChange={loadFile} />
                </Button>
                <IconButton
                    onClick={() => {
                        setShowParams(!showParams);
                    }}
                    icon={<Gear />}
                />
                <IconButton onClick={onClear} icon={<Trash />} />
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
            </div>
        </div>
    );
};

export default SongControls;
