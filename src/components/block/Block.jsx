import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import BlockControls from '../controls/BlockControls';

import './block.scss';
import Button from '../button/Button';

const Block = ({ block, delay, delayPx, onSave, selected, onSelect, onDeselect, onDrop }) => {
    const classNames = 'block' + (selected ? ' block--selected' : '');

    const select = () => {
        selected ? onDeselect() : onSelect();
    };

    const handleSave = (params) => {
        onSave({
            index: block.index,
            freq: params.freq,
            gain: params.gain,
            type: params.type,
            osc: params.osc,
            len: params.len,
        });
        onDeselect();
    };

    const handleDrop = (_, pos) => {
        onDrop(pos, block);
    };

    const style = {
        width: (block.len / delay) * delayPx + 'px',
    };

    return (
        <Draggable
            axis={'x'}
            grid={[delayPx]}
            bounds={'parent'}
            position={{ x: (block.beg / delay) * delayPx, y: 0 }}
            onStop={handleDrop}
        >
            <div className={classNames} style={style}>
                <div className="block__content">
                    ID: {block.index}
                    <br />
                    {block.freq}hz
                    <br />
                    {block.gain}/100
                    <br />
                    {block.type}
                    <br />
                    {block.osc}
                </div>
                <Button className="block__edit-button" onClick={select}>
                    E
                </Button>
                {selected && (
                    <BlockControls
                        freq={block.freq}
                        gain={block.gain}
                        type={block.type}
                        osc={block.osc}
                        len={block.len}
                        onSave={handleSave}
                    />
                )}
            </div>
        </Draggable>
    );
};

Block.propTypes = {
    block: PropTypes.shape({
        index: PropTypes.number,
        freq: PropTypes.number,
        gain: PropTypes.number,
        type: PropTypes.string,
        osc: PropTypes.string,
        beg: PropTypes.number,
        len: PropTypes.number,
    }),
    delay: PropTypes.number,
    delayPx: PropTypes.number,
    onSave: PropTypes.func,
    selected: PropTypes.bool,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onDrop: PropTypes.func,
};

export default Block;
