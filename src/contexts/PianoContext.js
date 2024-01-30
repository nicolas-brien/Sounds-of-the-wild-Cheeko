import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useFrequency } from 'react-frequency';

import notes from '../consts/notes';

const PianoContext = React.createContext();

const gain = 0.7;
const PianoContextProvider = ({ children }) => {
    const {
        start: startDo,
        stop: stopDo,
        playing: isDoPlaying,
    } = useFrequency({
        hz: notes.C4,
        gain,
        type: 'center',
        oscillator: 'sine',
    });
    const {
        start: startDoRe,
        stop: stopDoRe,
        playing: isDoRePlaying,
    } = useFrequency({
        hz: notes.CD4,
        gain,
        type: 'center',
        oscillator: 'sine',
    });
    const {
        start: startRe,
        stop: stopRe,
        playing: isRePlaying,
    } = useFrequency({
        hz: notes.D4,
        gain,
        type: 'center',
        oscillator: 'sine',
    });
    const {
        start: startReMi,
        stop: stopReMi,
        playing: isReMiPlaying,
    } = useFrequency({
        hz: notes.DE4,
        gain,
        type: 'center',
        oscillator: 'sine',
    });
    const {
        start: startMi,
        stop: stopMi,
        playing: isMiPlaying,
    } = useFrequency({
        hz: notes.E4,
        gain,
        type: 'center',
        oscillator: 'sine',
    });

    const {
        start: startFa,
        stop: stopFa,
        playing: isFaPlaying,
    } = useFrequency({
        hz: notes.F4,
        gain,
        type: 'center',
        oscillator: 'sine',
    });
    const {
        start: startFaSol,
        stop: stopFaSol,
        playing: isFaSolPlaying,
    } = useFrequency({
        hz: notes.FG4,
        gain,
        type: 'center',
        oscillator: 'sine',
    });
    const {
        start: startSol,
        stop: stopSol,
        playing: isSolPlaying,
    } = useFrequency({
        hz: notes.G4,
        gain,
        type: 'center',
        oscillator: 'sine',
    });
    const {
        start: startSolLa,
        stop: stopSolLa,
        playing: isSolLaPlaying,
    } = useFrequency({
        hz: notes.GA4,
        gain,
        type: 'center',
        oscillator: 'sine',
    });
    const {
        start: startLa,
        stop: stopLa,
        playing: isLaPlaying,
    } = useFrequency({
        hz: notes.A4,
        gain,
        type: 'center',
        oscillator: 'sine',
    });
    const {
        start: startLaSi,
        stop: stopLaSi,
        playing: isLaSiPlaying,
    } = useFrequency({
        hz: notes.AB4,
        gain,
        type: 'center',
        oscillator: 'sine',
    });
    const {
        start: startSi,
        stop: stopSi,
        playing: isSiPlaying,
    } = useFrequency({
        hz: notes.B4,
        gain,
        type: 'center',
        oscillator: 'sine',
    });
    const {
        start: startDo2,
        stop: stopDo2,
        playing: isDo2Playing,
    } = useFrequency({
        hz: notes.C5,
        gain,
        type: 'center',
        oscillator: 'sine',
    });

    const value = {
        startDo,
        stopDo,
        isDoPlaying,
        startDoRe,
        stopDoRe,
        isDoRePlaying,
        startRe,
        stopRe,
        isRePlaying,
        startReMi,
        stopReMi,
        isReMiPlaying,
        startMi,
        stopMi,
        isMiPlaying,

        startFa,
        stopFa,
        isFaPlaying,
        startFaSol,
        stopFaSol,
        isFaSolPlaying,
        startSol,
        stopSol,
        isSolPlaying,
        startSolLa,
        stopSolLa,
        isSolLaPlaying,
        startLa,
        stopLa,
        isLaPlaying,
        startLaSi,
        stopLaSi,
        isLaSiPlaying,
        startSi,
        stopSi,
        isSiPlaying,
        startDo2,
        stopDo2,
        isDo2Playing,
    };

    return <PianoContext.Provider value={value}>{children}</PianoContext.Provider>;
};

PianoContextProvider.propTypes = {
    children: PropTypes.any,
};

const usePiano = () => {
    const context = useContext(PianoContext);
    if (!context) {
        throw new Error('Missing context');
    }
    return context;
};

export { PianoContextProvider, usePiano };
