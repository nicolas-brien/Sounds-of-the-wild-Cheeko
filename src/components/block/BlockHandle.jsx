import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import './block-handle.scss';

const BlockHandle = ({ className, grid, position, onDrag, onStop }) => {
    return (
        <div className={className}>
            <Draggable axis={'x'} grid={grid} position={position} onDrag={onDrag} onStop={onStop}>
                <div className="block-handle"></div>
            </Draggable>
        </div>
    );
};

BlockHandle.propTypes = {
    className: PropTypes.string,
    grid: PropTypes.array,
    position: PropTypes.number,
    onDrag: PropTypes.func,
    onStop: PropTypes.func,
};

export default BlockHandle;
