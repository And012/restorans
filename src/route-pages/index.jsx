import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import AdminPage from "./admin/adminPage";
import MainPage from '../route-pages/main-page';
import InfoPage from "./info-page";

const AppRoutes = () =>
    (
        <Switch>
            <Route exact path="/">
                <MainPage/>
            </Route>
            <Route path="/admin">
                <AdminPage/>
            </Route>
            <Route path="/info">
                <InfoPage />
            </Route>
        </Switch>
    )

export default AppRoutes;
