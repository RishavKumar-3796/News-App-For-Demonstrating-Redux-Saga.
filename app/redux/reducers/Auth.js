
import Reduxer, { immutableMerge } from '../Reduxer';
import { GET_RESTAURANT_LIST_FAILURE, GET_RESTAURANT_LIST_REQUEST, GET_RESTAURANT_LIST_SUCCESS } from '../types/Auth';

export const INITIAL_STATE = Object.freeze({
    fetching: false,
    error: null,
    restaurantData: null
});

const request = (state) =>
    immutableMerge(state, {
        fetching: true,
        error: null,
    });

const success = (state, action) => {
    const { data } = action.payload;
    let newData = [];
    if (state?.restaurantData) newData = [...state?.restaurantData, ...data]
    else newData = data;
    console.log('newData', newData);

    return immutableMerge(state, {
        fetching: false,
        restaurantData: data,
        error: null
    });
}

const failure = (state, action) => {
    const error = action.payload;
    return immutableMerge(state, {
        fetching: false,
        error: error
    });
}


export default Reduxer(INITIAL_STATE, {
    [GET_RESTAURANT_LIST_REQUEST]: request,
    [GET_RESTAURANT_LIST_SUCCESS]: success,
    [GET_RESTAURANT_LIST_FAILURE]: failure,
});