import React, { useContext, useEffect, useState } from 'react';

const SongContext = React.createContext();

const delay = 10;

const SongContextProvider = ({ children }) => {
    const [duration] = useState(1800);

    const [isPlaying, setIsPlaying] = useState(false);
    const [cursor, setCursor] = useState(0);

    const tick = () => {
        console.log('Playing: ' + cursor + ' / ' + duration);
        if (cursor === duration) {
            return stop();
        }
        setCursor(cursor + delay);
    };

    const play = () => {
        setIsPlaying(true);
    };

    const pause = () => {
        setIsPlaying(false);
    };

    const stop = () => {
        setIsPlaying(false);
        setCursor(0);
    };

    useEffect(() => {
        if (isPlaying) {
            let id = '';
            id = setTimeout(tick, delay);
            return () => id && clearTimeout(id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying, cursor]);

    const value = { isPlaying, duration, cursor, play, pause, stop };

    return <SongContext.Provider value={value}>{children}</SongContext.Provider>;
};

const useSong = () => {
    const context = useContext(SongContext);
    if (!context) {
        throw new Error('Missing context');
    }
    return context;
};

export { SongContextProvider, useSong };
