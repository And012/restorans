import { call, put } from 'redux-saga/effects';
import firebase from 'firebase';
import {actions} from "../../slices";

export default function* createRestaurantSaga(action) {
    try {
        const restaurant = yield call(async () => createRestaurant(action.payload));
        yield put(actions.restaurants.add(restaurant));
    } catch {
        throw new Error('Unhandled error in createRestaurantSaga')
    }
}

const createRestaurant = async (restaurantInfo) => {
    const resRef = await firebase.firestore()
        .collection('restaurants')
        .doc();
    const finalRestaurantInfo = {
        ...restaurantInfo,
        uid: resRef.id,
    }

    await resRef.set(finalRestaurantInfo);
    return finalRestaurantInfo;
};