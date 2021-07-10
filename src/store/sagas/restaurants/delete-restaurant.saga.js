import { call, put } from 'redux-saga/effects';

import firebase from 'firebase';

import { actions } from '../../slices';

export default function* deleteRestaurantSaga(action) {
    try {
        yield call(async () => await deleteRestaurant(action.payload));

        yield put(actions.restaurants.delete(action.payload));
    } catch (error) {
        throw new Error('Unhandled error in deleteFaqSaga');
    }
}

const deleteRestaurant = async (restaurantUid) => {
    try {
        const restaurantRef = await firebase.firestore()
            .collection('restaurants')
            .doc(restaurantUid);

        restaurantRef.delete();
    } catch (error) {
        console.error(error);
        throw error;
    }
};
