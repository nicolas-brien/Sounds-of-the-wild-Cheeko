import React from 'react';

import PageContainer from '../components/page/container/PageContainer';
import PageHeader from '../components/page/header/PageHeader';
import PageContent from '../components/page/content/PageContent';

export default function Settings() {
    return (
        <PageContainer>
            <PageHeader title="Settings" />
            <PageContent>Settings</PageContent>
        </PageContainer>
    );
}
