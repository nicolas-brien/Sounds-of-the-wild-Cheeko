import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/nav/NavBar';
import Home from './home/Home';
import Settings from './settings/Settings';

import './App.scss';

export default function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<div>Not found</div>} />
            </Routes>
        </div>
    );
}
