import { all, takeLatest } from 'redux-saga/effects';
import API from '../services/Api';
import { GET_NEWS_LIST_REQUEST } from '../redux/types/Auth';
import { getNewsDetailListing } from './Auth';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

export default function* rootSaga() {
    yield all([takeLatest(GET_NEWS_LIST_REQUEST, getNewsDetailListing)]);
}
