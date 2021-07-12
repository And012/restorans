import { all, takeEvery } from 'redux-saga/effects';

import { asyncActions } from "../slices";
import fetchRestaurantsSaga from "./restaurants/fetch-restaurants.saga";
import updateRestaurantSaga from "./restaurants/update-restaurant.saga";
import createRestaurantSaga from "./restaurants/create-restaurants.saga";
import deleteRestaurantSaga from "./restaurants/delete-restaurant.saga";

export default function* rootSaga() {
    yield all([
        yield takeEvery(asyncActions.restaurants.fetchAll, fetchRestaurantsSaga),
        yield takeEvery(asyncActions.restaurants.update, updateRestaurantSaga),
        yield takeEvery(asyncActions.restaurants.create, createRestaurantSaga),
        yield takeEvery(asyncActions.restaurants.delete, deleteRestaurantSaga),
    ])
}