import React from "react";

import PageContainer from "../components/page/container/PageContainer";
import PageHeader from "../components/page/header/PageHeader";
import PageContent from "../components/page/content/PageContent";
import Dashboard from "./Dashboard";

const Home = () => {
    return (
        <PageContainer>
            <PageHeader title="Welcome to Hymn" />
            <PageContent>
                <Dashboard />
            </PageContent>
        </PageContainer>
    );
};

export default Home;