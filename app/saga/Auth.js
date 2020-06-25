import { call, put } from 'redux-saga/effects';
import API from '../services/Api';
import { getNewsListingSuccess, getNewsListingFailure } from '../redux/actions/Auth';
import { getError } from '../services/Utils';


export function* getNewsDetailListing(action) {
    //SAGA for api call
    const api = API.auth();
    const response = yield call(api.getNewsList, action.payload);
    //SAGA Generator function for api call
    if (response.status === 200) {
        //send the data
        yield put(getNewsListingSuccess(response.data));
    } else {
        const error = getError(response);
        //send the error
        yield put(getNewsListingFailure(error));
    }
}