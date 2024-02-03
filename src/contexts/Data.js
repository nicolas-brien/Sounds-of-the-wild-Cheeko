import React, { useContext } from 'react';
import { saveAs } from 'file-saver';
import PropTypes from 'prop-types';

const Data = React.createContext();

const DataProvider = ({ children }) => {
    const save = (fileName, tracks) => {
        const file = new Blob([JSON.stringify(tracks)], { type: 'text/plain;charset=utf-8' });
        saveAs(file, fileName + '.chko');
    };

    const load = async (file) => {
        return file.text().then((e) => JSON.parse(e));
    };

    const value = {
        save,
        load,
    };

    return <Data.Provider value={value}>{children}</Data.Provider>;
};

DataProvider.propTypes = {
    children: PropTypes.any,
};

const useData = () => {
    const context = useContext(Data);
    if (!context) {
        throw new Error('Missing context');
    }
    return context;
};

export { DataProvider, useData };
