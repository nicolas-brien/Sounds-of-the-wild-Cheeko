import React from 'react';
import PropTypes from 'prop-types';

import Notes from '../../consts/pianoNotes';

import './piano-keys.scss';

const PianoKeys = ({ onSelect }) => {
    const handleSelect = (note) => {
        onSelect(note);
    };

    const renderNotes = () => {
        return Object.keys(Notes).map((n, i) => {
            return (
                <div key={i} className="piano-keys__key" onClick={() => handleSelect(Notes[n])}>
                    {n}
                </div>
            );
        });
    };

    return <div className="piano-keys">{renderNotes()}</div>;
};

PianoKeys.propTypes = {
    onSelect: PropTypes.func,
};

export default PianoKeys;
