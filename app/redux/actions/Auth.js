import { GET_RESTAURANT_LIST_REQUEST, GET_RESTAURANT_LIST_SUCCESS, GET_RESTAURANT_LIST_FAILURE } from "../types/Auth";

export const getRestaurantListingRequest = payload => ({
    type: GET_RESTAURANT_LIST_REQUEST,
    payload
});

export const getRestaurantListingSuccess = payload => ({
    type: GET_RESTAURANT_LIST_SUCCESS,
    payload
});

export const getRestaurantListingFailure = payload => ({
    type: GET_RESTAURANT_LIST_FAILURE,
    payload
});