import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import BlockControls from '../controls/BlockControls';

import './block.scss';
import BlockHandle from './BlockHandle';

const Block = ({
    block,
    delay,
    delayPx,
    onSave,
    selected,
    onSelect,
    onDeselect,
    onDragRelease,
    onBegDragRelease,
    onEndDragRelease,
    onDelete,
}) => {
    const classNames = 'block' + (selected ? ' block--selected' : '');
    const [beg, setBeg] = useState(null);
    const [end, setEnd] = useState(null);

    const handleDelete = () => {
        onDelete(block.index);
    };

    const handleSelect = () => {
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

    const handleDragRelease = (_, pos) => {
        onDragRelease(pos, block);
    };

    const handleBegHandleDrag = (_, pos) => {
        setBeg(-pos.x);
    };

    const handleEndHandleDrag = (_, pos) => {
        setEnd(pos.x);
    };

    const handleBegHandleRelease = (_, pos) => {
        onBegDragRelease(-pos.x, block);
        setBeg(null);
    };

    const handleEndHandleRelease = (_, pos) => {
        onEndDragRelease(pos.x, block);
        setEnd(null);
    };

    const calcWidth = () => {
        if (beg) {
            return (block.len / delay) * delayPx + beg;
        }
        if (end) {
            return (block.len / delay) * delayPx + end;
        }

        return (block.len / delay) * delayPx;
    };

    const style = {
        width: calcWidth() + 'px',
    };

    return (
        <Draggable
            axis={'x'}
            grid={[delayPx]}
            bounds={'parent'}
            cancel="span"
            position={{ x: beg ? (block.beg / delay) * delayPx - beg : (block.beg / delay) * delayPx, y: 0 }}
            onStop={handleDragRelease}
        >
            <div className={classNames} style={style}>
                <div className="block__content">
                    <span>
                        <BlockHandle
                            className="block__handle"
                            grid={[delayPx]}
                            position={{ x: 0, y: 0 }}
                            onDrag={handleBegHandleDrag}
                            onStop={handleBegHandleRelease}
                        />
                    </span>
                    <div>
                        ID: {block.index}
                        <br />
                        {block.freq}hz
                        <br />
                        {block.gain}%
                        <br />
                        {block.type}
                        <br />
                        {block.osc}
                    </div>
                    <span>
                        <BlockHandle
                            className="block__handle"
                            grid={[delayPx]}
                            position={{ x: 0, y: 0 }}
                            onDrag={handleEndHandleDrag}
                            onStop={handleEndHandleRelease}
                        />
                    </span>
                </div>
                <div className="block__buttons">
                    <div onClick={handleDelete}>X</div>
                    <div onClick={handleSelect}>E</div>
                </div>
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
    onDragRelease: PropTypes.func,
    onBegDragRelease: PropTypes.func,
    onEndDragRelease: PropTypes.func,
    onDelete: PropTypes.func,
};

export default Block;
