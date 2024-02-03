import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../components/modal/Modal';

const EndScreen = ({ isEnded, hasWon, onRestart }) => {
    return (
        <Modal isShown={isEnded} onCTA={onRestart} CTALabel="Restart">
            <p>Game over</p>
            {hasWon ? <p>Congratulations</p> : <p>Try again</p>}
        </Modal>
    );
};

EndScreen.propTypes = {
    isEnded: PropTypes.bool,
    hasWon: PropTypes.bool,
    onRestart: PropTypes.func,
};

export default EndScreen;
