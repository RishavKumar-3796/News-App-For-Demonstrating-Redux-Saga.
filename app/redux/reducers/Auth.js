
import Reduxer, { immutableMerge } from '../Reduxer';
import { GET_NEWS_LIST_FAILURE, GET_NEWS_LIST_REQUEST, GET_NEWS_LIST_SUCCESS } from '../types/Auth';

export const INITIAL_STATE = Object.freeze({
    fetching: false, //initial fetching of data
    error: null, //update error if any
    newsData: null //update the data in this key
});

//while requesting for API call
const request = (state) =>
    immutableMerge(state, {
        fetching: true,
        error: null,
        newsData: null
    });

//Success for API call
const success = (state, action) => {
    const { data } = action.payload;
    return immutableMerge(state, {
        fetching: false,
        newsData: data, //Success for API call and update the data
        error: null
    });
}

//Failure for API call
const failure = (state, action) => {
    const error = action.payload;
    return immutableMerge(state, {
        fetching: false,
        error: error //update the error
    });
}


export default Reduxer(INITIAL_STATE, {
    [GET_NEWS_LIST_REQUEST]: request,
    [GET_NEWS_LIST_SUCCESS]: success,
    [GET_NEWS_LIST_FAILURE]: failure,
});