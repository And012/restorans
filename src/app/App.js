import React from 'react';

import {useDispatch} from "react-redux";

import {asyncActions} from "../store/slices";
import AppRoutes from "../route-pages";
import '../configs/firebase.config';

function App() {
  const dispatch = useDispatch();
  dispatch(asyncActions.restaurants.fetchAll());

  return (
    <AppRoutes />
  );
}

export default App;
