import React from 'react';

import { usePiano } from '../../contexts/PianoContext';
import useInputs from '../../hooks/useInputs';

import './live-piano.scss';

const LivePiano = () => {
    const {
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
    } = usePiano();

    useInputs(startDo, stopDo, ['KeyA']);
    useInputs(startDoRe, stopDoRe, ['KeyW']);
    useInputs(startRe, stopRe, ['KeyS']);
    useInputs(startReMi, stopReMi, ['KeyE']);
    useInputs(startMi, stopMi, ['KeyD']);

    useInputs(startFa, stopFa, ['KeyF']);
    useInputs(startFaSol, stopFaSol, ['KeyT']);
    useInputs(startSol, stopSol, ['KeyG']);
    useInputs(startSolLa, stopSolLa, ['KeyY']);
    useInputs(startLa, stopLa, ['KeyH']);
    useInputs(startLaSi, stopLaSi, ['KeyU']);
    useInputs(startSi, stopSi, ['KeyJ']);
    useInputs(startDo2, stopDo2, ['KeyK']);

    return (
        <div className="live-piano">
            <div className={isDoPlaying ? 'live-piano__white live-piano__white--active' : 'live-piano__white'}>C</div>
            <div className={isDoRePlaying ? 'live-piano__black live-piano__black--active' : 'live-piano__black'}>
                CD
            </div>
            <div className={isRePlaying ? 'live-piano__white live-piano__white--active' : 'live-piano__white'}>D</div>
            <div className={isReMiPlaying ? 'live-piano__black live-piano__black--active' : 'live-piano__black'}>
                DE
            </div>
            <div className={isMiPlaying ? 'live-piano__white live-piano__white--active' : 'live-piano__white'}>E</div>
            <div className={isFaPlaying ? 'live-piano__white live-piano__white--active' : 'live-piano__white'}>F</div>
            <div className={isFaSolPlaying ? 'live-piano__black live-piano__black--active' : 'live-piano__black'}>
                FG
            </div>
            <div className={isSolPlaying ? 'live-piano__white live-piano__white--active' : 'live-piano__white'}>G</div>
            <div className={isSolLaPlaying ? 'live-piano__black live-piano__black--active' : 'live-piano__black'}>
                GA
            </div>
            <div className={isLaPlaying ? 'live-piano__white live-piano__white--active' : 'live-piano__white'}>A</div>
            <div className={isLaSiPlaying ? 'live-piano__black live-piano__black--active' : 'live-piano__black'}>
                AB
            </div>
            <div className={isSiPlaying ? 'live-piano__white live-piano__white--active' : 'live-piano__white'}>B</div>
            <div className={isDo2Playing ? 'live-piano__white live-piano__white--active' : 'live-piano__white'}>C5</div>
        </div>
    );
};

export default LivePiano;
