import { all, takeLatest } from 'redux-saga/effects';
import API from '../services/Api';
import { GET_RESTAURANT_LIST_REQUEST } from '../redux/types/Auth';
import { getRestaurantDetailListing } from './Auth';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

export default function* rootSaga() {
    yield all([takeLatest(GET_RESTAURANT_LIST_REQUEST, getRestaurantDetailListing)]);
}
