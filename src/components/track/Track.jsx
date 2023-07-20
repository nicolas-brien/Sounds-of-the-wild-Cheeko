import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useFrequency } from 'react-frequency';

import { useSong } from '../../contexts/SongContext';
import defaultSound from '../../consts/defaultSound';
import defaultBlock from '../../consts/defaultBlock';
import { mockBlocks } from '../../consts/mocks';

import Block from '../block/Block';
import Button from '../button/Button';

import './track.scss';

const Track = ({ onDelete }) => {
    const { isPlaying, cursor, duration, delay } = useSong();

    const ref = useRef();
    const [delayPx, setTickPx] = useState(0);
    const [muted, setMuted] = useState(false);

    const [blocks, setBlocks] = useState();
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
            setTickPx(ref.current.clientWidth * ratio);
        }
    }, [ref.current?.clientWidth, delay, duration]);

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

    const validateChange = (newBlock) => {
        const previousBlock = blocks.find((b) => b.index === newBlock.index);
        const overlappedBlocks = blocks.filter(
            (b) =>
                b.index !== newBlock.index &&
                (b.beg === newBlock.beg ||
                    b.beg + b.len === newBlock.beg + newBlock.len ||
                    (b.beg < newBlock.beg && newBlock.beg < b.beg + b.len) ||
                    (b.beg < newBlock.beg + newBlock.len && newBlock.beg + newBlock.len < b.beg + b.len))
        );

        return previousBlock && overlappedBlocks.length === 0;
    };

    const toggleMute = () => {
        setMuted(!muted);
    };

    const handleFillMockBlocks = () => {
        setBlocks(mockBlocks);
    };

    const handleDeleteTrack = () => {
        onDelete();
    };

    const handleDeleteBlock = (i) => {
        setBlocks((state) => state.filter((b) => b.index !== i));
    };

    const handleCreateBlock = () => {
        let block = { ...defaultBlock, index: blocks?.length ?? 0 };
        setBlocks((b) => {
            if (b) {
                return [...b, block];
            }
            return [defaultBlock];
        });
    };

    const handleSaveBlock = (block) => {
        if (validateChange(block)) {
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
        }
    };

    const handleDragDrop = (pos, block) => {
        const newBlock = {
            ...block,
            beg: Math.round((pos.x / delayPx) * delay),
        };
        if (validateChange(newBlock)) {
            let newBlocks = blocks.map((b) => {
                if (b.index === block.index) {
                    return newBlock;
                }

                return b;
            });
            setBlocks(newBlocks);
        }
    };

    const handleBegDragDrop = (deltaX, block) => {
        const newBlock = {
            ...block,
            beg: Math.round((deltaX / delayPx) * delay),
            len: block.len + Math.round((deltaX / delayPx) * delay),
        };
        if (validateChange(newBlock)) {
            let newBlocks = blocks.map((b) => {
                if (b.index === block.index) {
                    return newBlock;
                }

                return b;
            });
            setBlocks(newBlocks);
        }
    };

    const handleEndDragDrop = (deltaX, block) => {
        const newBlock = {
            ...block,
            len: block.len + Math.round((deltaX / delayPx) * delay),
        };
        if (validateChange(newBlock)) {
            let newBlocks = blocks.map((b) => {
                if (b.index === block.index) {
                    return newBlock;
                }

                return b;
            });
            setBlocks(newBlocks);
        }
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
                    onSave={handleSaveBlock}
                    selected={selectedBlock === b.index}
                    onSelect={() => setSelectedBlock(b.index)}
                    onDeselect={() => setSelectedBlock(undefined)}
                    onDragRelease={handleDragDrop}
                    onBegDragRelease={handleBegDragDrop}
                    onEndDragRelease={handleEndDragDrop}
                    onDelete={handleDeleteBlock}
                />
            ));
        }
    };

    return (
        <div className="track">
            <div className="track__controls">
                <Button onClick={handleDeleteTrack}>X</Button>
                <Button onClick={toggleMute} style={{ textDecorationLine: muted ? 'line-through' : 'none' }}>
                    M
                </Button>
                <Button onClick={handleCreateBlock}>+</Button>
                <Button onClick={handleFillMockBlocks}>♭</Button>
            </div>
            <div ref={ref} className="track__content">
                {renderBlocks()}
                <div className="track__cursor" style={{ left: (cursor / delay) * delayPx + 'px' }} />
            </div>
        </div>
    );
};

Track.propTypes = {
    onDelete: PropTypes.func,
};

export default Track;
