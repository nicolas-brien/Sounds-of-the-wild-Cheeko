import React from 'react';

import { useSong } from '../contexts/SongContext';

import PageContainer from '../components/page/container/PageContainer';
import PageHeader from '../components/page/header/PageHeader';
import PageContent from '../components/page/content/PageContent';
import SongControls from '../components/song-controls/SongControls';
import Track from '../components/track/Track';
import Button from '../components/button/Button';

const Home = () => {
    const { tracks, createTrack, deleteTrack } = useSong();

    return (
        <PageContainer>
            <PageHeader title="Beep boop" />
            <PageContent>
                <SongControls />
                {tracks.map((t, i) => (
                    <Track key={i} index={i} baseBlocks={t} onDelete={() => deleteTrack(i)} />
                ))}
                <Button onClick={createTrack}>Add track</Button>
            </PageContent>
        </PageContainer>
    );
};

export default Home;
