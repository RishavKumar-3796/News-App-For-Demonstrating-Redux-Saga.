import { call, put } from 'redux-saga/effects';
import API from '../services/Api';
import { getNewsListingSuccess, getNewsListingFailure } from '../redux/actions/Auth';
import { getError } from '../services/Utils';


export function* getNewsDetailListing(action) {
    const api = API.auth();
    const response = yield call(api.getNewsList, action.payload);
    if (response.status === 200) {
        yield put(getNewsListingSuccess(response.data));
        console.log('res', response.data);

    } else {
        const error = getError(response);
        yield put(getNewsListingFailure(error));
    }
}