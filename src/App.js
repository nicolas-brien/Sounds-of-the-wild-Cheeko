import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { DataProvider } from './contexts/Data';
import { SongContextProvider } from './contexts/SongContext';

import NavBar from './components/nav/NavBar';
import Home from './home/Home';
import Live from './live/Live';
import Settings from './settings/Settings';

import './App.scss';

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <DataProvider>
                    <SongContextProvider>
                        <NavBar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/live" element={<Live />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="*" element={<div>Not found</div>} />
                        </Routes>
                    </SongContextProvider>
                </DataProvider>
            </BrowserRouter>
        </div>
    );
}
