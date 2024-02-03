import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Whole } from './svgs/128-whole-round.svg';
import { ReactComponent as Half } from './svgs/64-half-white.svg';
import { ReactComponent as Quarter } from './svgs/32-quarter-black.svg';
import { ReactComponent as Eighth } from './svgs/16-eighth-tilt.svg';
import { ReactComponent as Sixteenth } from './svgs/8-sixteenth-xtilt.svg';
import { ReactComponent as XXTilt } from './svgs/4-xxtilt.svg';
import { ReactComponent as Wow } from './svgs/2-wow.svg';

import './tile.scss';

const Tile = ({ value }) => {
    const render = () => {
        switch (value) {
            case 2:
                return <Wow />;
            case 4:
                return <XXTilt />;
            case 8:
                return <Sixteenth />;
            case 16:
                return <Eighth />;
            case 32:
                return <Quarter />;
            case 64:
                return <Half className="white" />;
            case 128:
                return <Whole className="white" />;
            default:
                return ' 0';
        }
    };

    return (
        <div className={value !== 0 ? 'tile' : 'tile tile--empty'}>
            <span className="tile__content">{render()}</span>
        </div>
    );
};

Tile.propTypes = {
    value: PropTypes.number.isRequired,
};

export default Tile;
