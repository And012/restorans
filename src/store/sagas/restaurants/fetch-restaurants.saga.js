import { call, put } from 'redux-saga/effects';
import firebase from 'firebase';

import { actions } from '../../slices';

export default function* fetchRestaurantsSaga() {
    try {
        yield put(actions.restaurants.setIsLoading(true));
        const restaurants = yield call(async () => await fetchRestaurants());

        yield put(actions.restaurants.setAll(restaurants));
    } catch (error) {
        throw new Error('Unhandled error in fetchRestaurantsSaga');
    } finally {
        yield put(actions.restaurants.setIsLoading(false));
    }
}

const fetchRestaurants = async () => {
    const restaurants = await firebase
        .firestore()
        .collection('restaurants')
        .get()

    return restaurants.docs.map((doc) => doc.data());
}
