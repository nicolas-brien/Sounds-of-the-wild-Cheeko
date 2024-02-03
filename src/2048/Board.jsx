import React from 'react';
import PropTypes from 'prop-types';

import themes from './themes';

import Tile from './Tile';

import './board.scss';

const Board = ({ tiles, theme }) => {
    return (
        <div className="board">
            {tiles.map((value, i) => {
                return (
                    <div className="c2048__tile" key={i}>
                        <Tile value={value} theme={theme} />
                    </div>
                );
            })}
        </div>
    );
};

Board.propTypes = {
    tiles: PropTypes.arrayOf(PropTypes.number),
    theme: PropTypes.oneOf(Object.values(themes)),
};

Board.defaultProps = {
    theme: themes.Notes,
};

export default Board;
