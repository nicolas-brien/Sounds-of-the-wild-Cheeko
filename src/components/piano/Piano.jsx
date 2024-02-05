import React from 'react';

import { usePiano } from '../../contexts/PianoContext';
import useInputs from '../../hooks/useInputs';

import './piano.scss';

const key = {};

const Piano = () => {
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

    useInputs(startDo, stopDo, ['KeyA', 'Backquote']);
    useInputs(startDoRe, stopDoRe, ['KeyW', 'Digit1']);
    useInputs(startRe, stopRe, ['KeyS', 'Digit2']);
    useInputs(startReMi, stopReMi, ['KeyE', 'Digit3']);
    useInputs(startMi, stopMi, ['KeyD', 'Digit4']);

    useInputs(startFa, stopFa, ['KeyF', 'Digit5']);
    useInputs(startFaSol, stopFaSol, ['KeyT', 'Digit6']);
    useInputs(startSol, stopSol, ['KeyG', 'Digit7']);
    useInputs(startSolLa, stopSolLa, ['KeyY', 'Digit8']);
    useInputs(startLa, stopLa, ['KeyH', 'Digit9']);
    useInputs(startLaSi, stopLaSi, ['KeyU', 'Digit0']);
    useInputs(startSi, stopSi, ['KeyJ', 'Minus']);
    useInputs(startDo2, stopDo2, ['KeyK', 'Equal']);

    return (
        <div className="piano">
            <div
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={() => startDo()}
                onTouchStart={() => startDo()}
                onMouseUp={() => stopDo()}
                onTouchEnd={() => stopDo()}
                className={isDoPlaying ? 'piano__white piano__white--active' : 'piano__white'}
            >
                C
            </div>
            <div
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={() => startDoRe()}
                onTouchStart={() => startDoRe()}
                onMouseUp={() => stopDoRe()}
                onTouchEnd={() => stopDoRe()}
                className={isDoRePlaying ? 'piano__black piano__black--active' : 'piano__black'}
            >
                CD
            </div>
            <div
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={() => startRe()}
                onTouchStart={() => startRe()}
                onMouseUp={() => stopRe()}
                onTouchEnd={() => stopRe()}
                className={isRePlaying ? 'piano__white piano__white--active' : 'piano__white'}
            >
                D
            </div>
            <div
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={() => startReMi()}
                onTouchStart={() => startReMi()}
                onMouseUp={() => stopReMi()}
                onTouchEnd={() => stopReMi()}
                className={isReMiPlaying ? 'piano__black piano__black--active' : 'piano__black'}
            >
                DE
            </div>
            <div
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={() => startMi()}
                onTouchStart={() => startMi()}
                onMouseUp={() => stopMi()}
                onTouchEnd={() => stopMi()}
                className={isMiPlaying ? 'piano__white piano__white--active' : 'piano__white'}
            >
                E
            </div>
            <div
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={() => startFa()}
                onTouchStart={() => startFa()}
                onMouseUp={() => stopFa()}
                onTouchEnd={() => stopFa()}
                className={isFaPlaying ? 'piano__white piano__white--active' : 'piano__white'}
            >
                F
            </div>
            <div
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={() => startFaSol()}
                onTouchStart={() => startFaSol()}
                onMouseUp={() => stopFaSol()}
                onTouchEnd={() => stopFaSol()}
                className={isFaSolPlaying ? 'piano__black piano__black--active' : 'piano__black'}
            >
                FG
            </div>
            <div
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={() => startSol()}
                onTouchStart={() => startSol()}
                onMouseUp={() => stopSol()}
                onTouchEnd={() => stopSol()}
                className={isSolPlaying ? 'piano__white piano__white--active' : 'piano__white'}
            >
                G
            </div>
            <div
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={() => startSolLa()}
                onTouchStart={() => startSolLa()}
                onMouseUp={() => stopSolLa()}
                onTouchEnd={() => stopSolLa()}
                className={isSolLaPlaying ? 'piano__black piano__black--active' : 'piano__black'}
            >
                GA
            </div>
            <div
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={() => startLa()}
                onTouchStart={() => startLa()}
                onMouseUp={() => stopLa()}
                onTouchEnd={() => stopLa()}
                className={isLaPlaying ? 'piano__white piano__white--active' : 'piano__white'}
            >
                A
            </div>
            <div
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={() => startLaSi()}
                onTouchStart={() => startLaSi()}
                onMouseUp={() => stopLaSi()}
                onTouchEnd={() => stopLaSi()}
                className={isLaSiPlaying ? 'piano__black piano__black--active' : 'piano__black'}
            >
                AB
            </div>
            <div
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={() => startSi()}
                onTouchStart={() => startSi()}
                onMouseUp={() => stopSi()}
                onTouchEnd={() => stopSi()}
                className={isSiPlaying ? 'piano__white piano__white--active' : 'piano__white'}
            >
                B
            </div>
            <div
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={() => startDo2()}
                onTouchStart={() => startDo2()}
                onMouseUp={() => stopDo2()}
                onTouchEnd={() => stopDo2()}
                className={isDo2Playing ? 'piano__white piano__white--active' : 'piano__white'}
            >
                C5
            </div>
        </div>
    );
};

export default Piano;
