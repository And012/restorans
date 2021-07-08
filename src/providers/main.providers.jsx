import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";

import theme from '../configs/ui.config';

const MainProviders = ({ children }) => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />

            <BrowserRouter>
                {children}
            </BrowserRouter>
        </MuiThemeProvider>
    );
};

export default MainProviders;
