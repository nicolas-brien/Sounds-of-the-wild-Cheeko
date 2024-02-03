import React from 'react';
import PropTypes from 'prop-types';

import themes from './themes';

import { ReactComponent as Two } from '../svg/numbers/2.svg';
import { ReactComponent as Four } from '../svg/numbers/4.svg';
import { ReactComponent as Eight } from '../svg/numbers/8.svg';
// import { ReactComponent as Sixteen } from '../svg/numbers/16.svg';
// import { ReactComponent as ThirtyTwo } from '../svg/numbers/32.svg';
// import { ReactComponent as SixtyFour } from '../svg/numbers/64.svg';
// import { ReactComponent as OneHundredTwentyEight } from '../svg/numbers/128.svg';

import { ReactComponent as Wow } from '../svg/notes/2-wow.svg';
import { ReactComponent as XXTilt } from '../svg/notes/4-xxtilt.svg';
import { ReactComponent as Sixteenth } from '../svg/notes/8-sixteenth-xtilt.svg';
import { ReactComponent as Eighth } from '../svg/notes/16-eighth-tilt.svg';
import { ReactComponent as Quarter } from '../svg/notes/32-quarter-black.svg';
import { ReactComponent as Half } from '../svg/notes/64-half-white.svg';
import { ReactComponent as Whole } from '../svg/notes/128-whole-round.svg';

import './tile.scss';

const Tile = ({ value, theme }) => {
    const render = () => {
        switch (theme) {
            case themes.Numbers:
                return renderNumbers();
            case themes.Notes:
                return renderNotes();
            case themes.Silences:
                return renderSilences();
            default:
                return renderNotes();
        }
    };

    const renderNumbers = () => {
        switch (value) {
            case 2:
                return <Two />;
            case 4:
                return <Four />;
            case 8:
                return <Eight />;
            case 16:
                return '16';
            case 32:
                return '32';
            case 64:
                return '64';
            case 128:
                return '128';
            default:
                return ' 0';
        }
    };

    const renderNotes = () => {
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

    const renderSilences = () => {
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
    theme: PropTypes.oneOf(Object.values(themes)),
};

export default Tile;
