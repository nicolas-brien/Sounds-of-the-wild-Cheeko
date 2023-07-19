import React from 'react';
import PropTypes from 'prop-types';

import Notes from '../../consts/notes';

import './piano.scss';

const Piano = ({ onSelect }) => {
    const handleSelect = (note) => {
        onSelect(note);
    };

    const renderNotes = () => {
        return Object.keys(Notes).map((n, i) => {
            return (
                <div key={i} className="piano__note" onClick={() => handleSelect(Notes[n])}>
                    {n}
                </div>
            );
        });
    };

    return <div className="piano">{renderNotes()}</div>;
};

Piano.propTypes = {
    onSelect: PropTypes.func,
};

export default Piano;
