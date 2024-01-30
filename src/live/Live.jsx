import React from 'react';

import { PianoContextProvider } from '../contexts/PianoContext';

import PageContainer from '../components/page/container/PageContainer';
import PageHeader from '../components/page/header/PageHeader';
import PageContent from '../components/page/content/PageContent';
import LivePiano from '../components/piano/LivePiano';

const Live = () => {
    return (
        <PianoContextProvider>
            <PageContainer>
                <PageHeader title="Live BeBop" />
                <PageContent>
                    <LivePiano />
                </PageContent>
            </PageContainer>
        </PianoContextProvider>
    );
};

export default Live;
