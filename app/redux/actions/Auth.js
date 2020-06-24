import { GET_NEWS_LIST_REQUEST, GET_NEWS_LIST_SUCCESS, GET_NEWS_LIST_FAILURE } from "../types/Auth";

export const getNewsListingRequest = payload => ({
    type: GET_NEWS_LIST_REQUEST,
    payload
});

export const getNewsListingSuccess = payload => ({
    type: GET_NEWS_LIST_SUCCESS,
    payload
});

export const getNewsListingFailure = payload => ({
    type: GET_NEWS_LIST_FAILURE,
    payload
});