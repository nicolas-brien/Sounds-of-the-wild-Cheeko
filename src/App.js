import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { DataProvider } from './contexts/Data';
import { SongContextProvider } from './contexts/SongContext';

import NavBar from './components/nav/NavBar';
import Home from './home/Home';
import Settings from './settings/Settings';

import './App.scss';

export default function App() {
    return (
        <div>
            <DataProvider>
                <SongContextProvider>
                    <NavBar />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="*" element={<div>Not found</div>} />
                    </Routes>
                </SongContextProvider>
            </DataProvider>
        </div>
    );
}
