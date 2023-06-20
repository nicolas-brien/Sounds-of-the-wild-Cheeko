import React from "react";

import PageContainer from "../components/page/container/PageContainer";
import PageHeader from "../components/page/header/PageHeader";
import PageContent from "../components/page/content/PageContent";
// import Dashboard from "./Dashboard";
import Controls from "../components/controls/Controls";
import Track from "../components/track/Track";
import { SongContextProvider } from "../contexts/SongContext";
import SongControls from "../components/song-controls/SongControls";

const Home = () => {
    return (
        <PageContainer>
            <PageHeader title="Welcome to Hymn" />
            <PageContent>
                <SongContextProvider>
                    <SongControls />
                    <Track />
                    <Controls />
                </SongContextProvider>
            </PageContent>
        </PageContainer>
    );
};

export default Home;