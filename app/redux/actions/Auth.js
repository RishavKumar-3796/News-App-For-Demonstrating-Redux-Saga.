import { GET_NEWS_LIST_REQUEST, GET_NEWS_LIST_SUCCESS, GET_NEWS_LIST_FAILURE } from "../types/Auth";

//Action being called while request
export const getNewsListingRequest = payload => ({
    type: GET_NEWS_LIST_REQUEST,
    payload
});

//Action being called while success of API
export const getNewsListingSuccess = payload => ({
    type: GET_NEWS_LIST_SUCCESS,
    payload
});

//Action being called while failure of API
export const getNewsListingFailure = payload => ({
    type: GET_NEWS_LIST_FAILURE,
    payload
});