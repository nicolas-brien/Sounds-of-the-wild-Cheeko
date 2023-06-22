import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useFrequency } from 'react-frequency';

import { useSong } from '../../contexts/SongContext';
import defaultSound from '../../consts/defaultSound';
import defaultBlock from '../../consts/defaultBlock';

import Block from '../block/Block';
import Button from '../button/Button';

import './track.scss';

const Track = ({ defaultBlocks }) => {
    const { isPlaying, cursor, duration, delay } = useSong();

    const ref = useRef();
    const [delayPx, setTickPx] = useState(0);

    const [muted, setMuted] = useState(false);
    const [blocks, setBlocks] = useState(defaultBlocks);
    const [selectedBlock, setSelectedBlock] = useState();

    const [currentFreq, setCurrentFreq] = useState(defaultSound.frequency);
    const [currentGain, setCurrentGain] = useState(defaultSound.gain);
    const [currentType, setCurrentType] = useState(defaultSound.type);
    const [currentOsc, setCurrentOsc] = useState(defaultSound.oscillator);

    const { start, stop, playing } = useFrequency({
        hz: currentFreq,
        gain: currentGain / 100,
        type: currentType,
        oscillator: currentOsc,
    });

    useEffect(() => {
        if (ref.current) {
            let ratio = delay / duration;
            // setTickPx(Math.floor(ref.current.clientWidth * ratio));
            setTickPx(ref.current.clientWidth * ratio);
        }
    }, [ref.current?.clientWidth]);

    useEffect(() => {
        if (blocks && !muted && isPlaying) {
            const currentBlock = blocks.find((b) => b.beg <= cursor && b.beg + b.len > cursor);

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

    const createBlock = () => {
        let block = { ...defaultBlock, index: blocks?.length ?? 0 };
        setBlocks((b) => {
            if (b) {
                return [...b, block];
            }
            return [defaultBlock];
        });
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

    const handleDragDrop = (pos, block) => {
        let newBlocks = blocks.map((b) => {
            if (b.index === block.index) {
                return {
                    ...block,
                    beg: (pos.x / delayPx) * delay,
                };
            }

            return b;
        });
        setBlocks(newBlocks);
    };

    const renderBlocks = () => {
        if (blocks) {
            return blocks.map((b) => (
                <Block
                    key={b.index}
                    block={b}
                    beg={b.beg}
                    len={b.len}
                    delay={delay}
                    delayPx={delayPx}
                    onSave={saveBlock}
                    selected={selectedBlock === b.index}
                    onSelect={() => setSelectedBlock(b.index)}
                    onDeselect={() => setSelectedBlock(undefined)}
                    onDrop={handleDragDrop}
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
                <Button onClick={createBlock}>+</Button>
            </div>
            <div ref={ref} className="track__content">
                {renderBlocks()}
                <div className="track__cursor" style={{ left: (cursor / delay) * delayPx + 'px' }} />
            </div>
        </div>
    );
};

Track.propTypes = {
    defaultBlocks: PropTypes.array,
};

export default Track;
