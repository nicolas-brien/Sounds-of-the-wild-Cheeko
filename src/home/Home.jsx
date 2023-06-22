import React from 'react';

import { SongContextProvider } from '../contexts/SongContext';

import { mockBlocks } from '../consts/mocks';

import PageContainer from '../components/page/container/PageContainer';
import PageHeader from '../components/page/header/PageHeader';
import PageContent from '../components/page/content/PageContent';
import SongControls from '../components/song-controls/SongControls';
import Track from '../components/track/Track';

const Home = () => {
    return (
        <PageContainer>
            <PageHeader title="Beep boop" />
            <PageContent>
                <SongContextProvider>
                    <SongControls />
                    <Track defaultBlocks={mockBlocks} />
                </SongContextProvider>
            </PageContent>
        </PageContainer>
    );
};

export default Home;
