import React, { useState } from 'react';

import { SongContextProvider } from '../contexts/SongContext';

import PageContainer from '../components/page/container/PageContainer';
import PageHeader from '../components/page/header/PageHeader';
import PageContent from '../components/page/content/PageContent';
import SongControls from '../components/song-controls/SongControls';
import Track from '../components/track/Track';
import Button from '../components/button/Button';

const Home = () => {
    const [tracks, setTracks] = useState(['wow']);

    const handleAddTrack = () => {
        setTracks((t) => [...t, 'wow']);
    };

    const handleDeleteTrack = (i) => {
        setTracks((t) => t.splice(i, 1));
    };

    return (
        <PageContainer>
            <PageHeader title="Beep boop" />
            <PageContent>
                <SongContextProvider>
                    <SongControls />
                    {tracks.map((t, i) => (
                        <Track key={i} onDelete={() => handleDeleteTrack(i)} />
                    ))}
                    <Button onClick={handleAddTrack}>Add track</Button>
                </SongContextProvider>
            </PageContent>
        </PageContainer>
    );
};

export default Home;
