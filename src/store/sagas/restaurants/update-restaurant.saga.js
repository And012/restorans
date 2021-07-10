import { call, put } from 'redux-saga/effects';
import firebase from "firebase";

import { actions } from "../../slices";

export default function* updateRestaurantSaga(action) {
    try {
        // yield put(actions.restaurants.setIsLoading(true));
        const restaurant = yield call(async () => await updateRestaurant(action.payload));

        yield put(actions.restaurants.update(restaurant));
    } catch (error) {
        throw new Error('Unhandled error in updateRestaurantSaga');
    } finally {
        // yield put(actions.restaurants.setIsLoading(false));
    }
}

async function updateRestaurant(restaurantInfo) {
    try {
        const restaurantRef = await firebase.firestore()
            .collection('restaurants')
            .doc(restaurantInfo.uid);

        await restaurantRef.update(restaurantInfo);

        return restaurantInfo;
    } catch (error) {
        console.error(error);
        throw error;
    }
}