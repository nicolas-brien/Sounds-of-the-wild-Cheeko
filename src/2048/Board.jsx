import React from 'react';
import PropTypes from 'prop-types';

import Tile from './Tile';

import './board.scss';

const Board = ({ tiles }) => {
    return (
        <div className="board">
            {tiles.map((value, i) => {
                return (
                    <div className="c2048__tile" key={i}>
                        <Tile value={value} />
                    </div>
                );
            })}
        </div>
    );
};

Board.propTypes = {
    tiles: PropTypes.arrayOf(PropTypes.number),
};

export default Board;
