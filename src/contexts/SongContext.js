import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SongContext = React.createContext();

const SongContextProvider = ({ children }) => {
    const [delay, setDelay] = useState(10);
    const [duration, setDuration] = useState(5000);

    const [isPlaying, setIsPlaying] = useState(false);
    const [cursor, setCursor] = useState(0);

    const [tracks, setTracks] = useState([]);

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

    const createTrack = () => {
        setTracks((t) => (t ? [...t, []] : [[]]));
    };

    const loadTracks = (tracks) => {
        setTracks(tracks);
    };

    const updateTrack = (index, blocks) => {
        setTracks((t) =>
            t.map((b, i) => {
                if (i === index) {
                    return blocks;
                }
                return b;
            })
        );
    };

    const deleteTrack = (index) => {
        setTracks((t) => t.splice(index, 1));
    };

    useEffect(() => {
        if (isPlaying) {
            let id = '';
            id = setTimeout(tick, delay);
            return () => id && clearTimeout(id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying, cursor]);

    const value = {
        tracks,
        createTrack,
        loadTracks,
        updateTrack,
        deleteTrack,
        isPlaying,
        duration,
        setDuration,
        delay,
        setDelay,
        cursor,
        play,
        pause,
        stop,
    };

    return <SongContext.Provider value={value}>{children}</SongContext.Provider>;
};

SongContextProvider.propTypes = {
    children: PropTypes.any,
};

const useSong = () => {
    const context = useContext(SongContext);
    if (!context) {
        throw new Error('Missing context');
    }
    return context;
};

export { SongContextProvider, useSong };
