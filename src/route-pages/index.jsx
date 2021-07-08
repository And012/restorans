import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

const AppRoutes = () => {
    // firebase.firestore().collection('restaurants').get().then(data => {
    //     const docs = data.docs.map((doc) => doc.data());
    //     console.log(docs);
    // });
    return (
        <Switch>
            <Route exact path="/">
                <h1>Main page</h1>
            </Route>
            <Route path="/admin">
                <h1>Admin page</h1>
            </Route>
            <Route path="/info">
                <h1>info page</h1>
            </Route>
        </Switch>
    )
}

export default AppRoutes;
