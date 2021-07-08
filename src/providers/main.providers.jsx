import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const MainProviders = ({ children }) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
};

export default MainProviders;
