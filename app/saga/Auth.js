import { call, put } from 'redux-saga/effects';
import API from '../services/Api';
import { getRestaurantListingSuccess, getRestaurantListingFailure } from '../redux/actions/Auth';
import { getError } from '../services/Utils';


export function* getRestaurantDetailListing(action) {
    const api = API.auth();
    console.log('action.payload', action.payload);

    const response = yield call(api.getRestaurantList, action.payload);
    // console.log('response\n\n\n\n\n\n\n\n\n\n\n\n\nn\n\n\n\n\nn\n\n\n\n', response);
    if (response.status === 200) {
        yield put(getRestaurantListingSuccess(response.data));
        console.log('res', response.data);

    } else {
        const error = getError(response);
        yield put(getRestaurantListingFailure(error));
    }
}