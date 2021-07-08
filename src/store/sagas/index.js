import { all, takeEvery } from 'redux-saga/effects';

import { asyncActions } from "../slices";
import fetchRestaurantsSaga from "./restaurants/fetch-restaurants.saga";

export default function* rootSaga() {
    yield all([
        yield takeEvery(asyncActions.restaurants.fetchAll, fetchRestaurantsSaga),
    ])
}