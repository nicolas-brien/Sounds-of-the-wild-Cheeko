import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useFrequency } from 'react-frequency';

import { useSong } from '../../contexts/SongContext';

import defaultValues from '../../consts/defaultSoundValues';

import Block from '../block/Block';

import './track.scss';
import Button from '../button/Button';

const Track = ({ defaultBlocks }) => {
    const { isPlaying, cursor, duration } = useSong();

    const [muted, setMuted] = useState(false);
    const [blocks, setBlocks] = useState(defaultBlocks);
    const [selectedBlock, setSelectedBlock] = useState();

    const [currentFreq, setCurrentFreq] = useState(defaultValues.frequency);
    const [currentGain, setCurrentGain] = useState(defaultValues.gain);
    const [currentType, setCurrentType] = useState(defaultValues.type);
    const [currentOsc, setCurrentOsc] = useState(defaultValues.oscillator);

    const { start, stop, playing } = useFrequency({
        hz: currentFreq,
        gain: currentGain / 100,
        type: currentType,
        oscillator: currentOsc,
    });

    useEffect(() => {
        if (blocks && !muted && isPlaying) {
            const currentBlock = blocks.find((b) => b.beg <= cursor && b.end >= cursor);

            if (currentBlock) {
                if (currentFreq !== currentBlock.freq) {
                    setCurrentFreq(currentBlock.freq);
                }
                if (currentGain !== currentBlock.gain) {
                    setCurrentGain(currentBlock.gain);
                }
                if (currentType !== currentBlock.type) {
                    setCurrentType(currentBlock.type);
                }
                if (currentOsc !== currentBlock.osc) {
                    setCurrentOsc(currentBlock.osc);
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

    const toggleMute = () => {
        setMuted(!muted);
    };

    const saveBlock = (block) => {
        const updatedBlocks = blocks.map((b, i) => {
            if (i === block.index) {
                return {
                    ...b,
                    ...block,
                };
            }
            return b;
        });
        setBlocks(updatedBlocks);
    };

    const renderBlocks = () => {
        if (blocks) {
            return blocks.map((b) => (
                <Block
                    key={b.index}
                    index={b.index}
                    freq={b.freq}
                    gain={b.gain}
                    type={b.type}
                    osc={b.osc}
                    min={0}
                    max={duration}
                    beg={b.beg}
                    end={b.end}
                    onSave={saveBlock}
                    selected={selectedBlock === b.index}
                    onSelect={() => setSelectedBlock(b.index)}
                    onDeselect={() => setSelectedBlock(undefined)}
                />
            ));
        }
    };

    return (
        <div className="track">
            <div className="track__controls">
                <Button onClick={toggleMute} style={{ textDecorationLine: muted ? 'line-through' : 'none' }}>
                    M
                </Button>
            </div>
            <div className="track__content">
                {renderBlocks()}
                <div className="track__cursor" style={{ left: (cursor / duration) * 100 + '%' }} />
            </div>
        </div>
    );
};

Track.propTypes = {
    defaultBlocks: PropTypes.array,
};

export default Track;
