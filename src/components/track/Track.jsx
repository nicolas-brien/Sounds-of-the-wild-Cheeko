import React, { useEffect, useState } from 'react';
import { useFrequency } from 'react-frequency';

import { useSong } from '../../contexts/SongContext';

import Block from '../block/Block';
import { mockBlocks } from '../../consts/mocks';

import './track.scss';

const Track = () => {
    const { isPlaying, cursor, duration } = useSong();

    const [blocks, setBlocks] = useState([]);
    const [currentFreq, setCurrentFreq] = useState(0);

    const { start, stop, playing } = useFrequency({
        hz: currentFreq,
        type: 'center',
        gain: 0.1,
        oscillator: 'triangle',
    });

    useEffect(() => {
        if (isPlaying) {
            const currentBlock = blocks.find((b) => b.beg <= cursor && b.end >= cursor);

            if (currentBlock) {
                if (currentFreq !== currentBlock.hz) {
                    setCurrentFreq(currentBlock.hz);
                }
                if (!playing) {
                    start();
                }
            } else if (!currentBlock && playing) {
                stop();
            }
        } else if (!isPlaying && playing) {
            stop();
        }
    }, [cursor, isPlaying]);

    const renderBlocks = () => {
        return blocks.map((b, i) => <Block key={i} min={0} max={duration} beg={b.beg} end={b.end} />);
    };

    useEffect(() => {
        setBlocks(mockBlocks);
    }, []);

    return (
        <div className="track">
            {renderBlocks()}
            <div className="cursor" style={{ left: (cursor / duration) * 100 + '%' }} />
        </div>
    );
};

export default Track;
