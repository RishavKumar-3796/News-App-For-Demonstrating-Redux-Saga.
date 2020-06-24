
import Reduxer, { immutableMerge } from '../Reduxer';
import { GET_NEWS_LIST_FAILURE, GET_NEWS_LIST_REQUEST, GET_NEWS_LIST_SUCCESS } from '../types/Auth';

export const INITIAL_STATE = Object.freeze({
    fetching: false,
    error: null,
    newsData: null
});

const request = (state) =>
    immutableMerge(state, {
        fetching: true,
        error: null,
    });

const success = (state, action) => {
    const { data } = action.payload;
    let newData = [];
    if (state?.newsData) newData = [...state?.newsData, ...data]
    else newData = data;
    return immutableMerge(state, {
        fetching: false,
        newsData: data,
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
    [GET_NEWS_LIST_REQUEST]: request,
    [GET_NEWS_LIST_SUCCESS]: success,
    [GET_NEWS_LIST_FAILURE]: failure,
});