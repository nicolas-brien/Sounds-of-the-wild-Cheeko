import React from 'react';
import PropTypes from 'prop-types';

import './tile.scss';

const Tile = ({ value }) => {
    return (
        <div className={value !== 0 ? 'tile' : 'tile tile--empty'}>
            <span className="tile__content">{value}</span>
        </div>
    );
};

Tile.propTypes = {
    value: PropTypes.number.isRequired,
};

export default Tile;
