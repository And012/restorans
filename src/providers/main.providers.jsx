import React from 'react';
import {Provider} from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";

import theme from '../configs/ui.config';
import store from "../store";

const MainProviders = ({ children }) => {
    return (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />

                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </MuiThemeProvider>
        </Provider>
    );
};

export default MainProviders;
