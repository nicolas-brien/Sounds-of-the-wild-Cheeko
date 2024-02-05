import React from 'react';

import { PianoContextProvider } from '../contexts/PianoContext';

import PageContainer from '../components/page/container/PageContainer';
import PageContent from '../components/page/content/PageContent';
import Piano from '../components/piano/Piano';

const PianoPage = () => {
    return (
        <PianoContextProvider>
            <PageContainer>
                <PageContent>
                    <Piano />
                </PageContent>
            </PageContainer>
        </PianoContextProvider>
    );
};

export default PianoPage;
