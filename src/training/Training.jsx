import React, { useState, useEffect, useCallback, useRef } from 'react';

import './training.css';
import notes from '../consts/notes';
import Piano from '../components/piano/Piano';
import Button from '../components/button/Button';
import { useFrequency } from 'react-frequency';
import { PianoContextProvider } from '../contexts/PianoContext';
import PageContainer from '../components/page/container/PageContainer';
import PageContent from '../components/page/content/PageContent';

const Training = () => {
    const [trainingNotes, setTrainingNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState(notes.C4);
    const { start, stop } = useFrequency({
        hz: currentNote,
        gain: 0.7,
        type: 'center',
        oscillator: 'sine',
    });
    var stopRef = useRef(stop);
    stopRef.current = stop;

    useEffect(() => {
        if (trainingNotes.length === 0) {
            var note1 = Object.values(notes)[Math.floor(Math.random() * Object.keys(notes).length)];
            var note2 = Object.values(notes)[Math.floor(Math.random() * Object.keys(notes).length)];
            var note3 = Object.values(notes)[Math.floor(Math.random() * Object.keys(notes).length)];
            setTrainingNotes([note1, note2, note3]);
        }

        return () => {};
    });

    const handlePlay = (note) => {
        setCurrentNote(trainingNotes[note]);
        if (note === 0) start();
        setTimeout(() => {
            if (note < 2) {
                handlePlay(note + 1);
            } else {
                stopRef.current();
            }
        }, 1000);
    };

    return (
        <PianoContextProvider>
            <PageContainer>
                <PageContent>
                    <div className="training">
                        <div className="training__title">Training</div>

                        <div className="training__content">
                            Guess the notes ({trainingNotes.map((n) => n + ', ')})
                            <Button onClick={() => handlePlay(0)}>Play</Button>
                            <Piano />
                        </div>
                    </div>
                </PageContent>
            </PageContainer>
        </PianoContextProvider>
    );
};

export default Training;
