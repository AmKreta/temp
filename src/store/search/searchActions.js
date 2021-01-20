import axios from 'axios';
import { SET_SEARCH_RESULT, SET_SEARCH_QUERY, SET_SEARCH_SUGGESTION, SET_SEARCH_CATEGORY, SET_SEARCH_FILTER, SELECT_DATA } from './searchActionTypes';
import { SEARCH_BUSINESS } from '../../services/services';

const setSearchresult = function (data) {
    return { type: SET_SEARCH_RESULT, payload: { loading: false, data: data } }
}

const setSearchResultLoadingTrue = function () {
    return { type: SET_SEARCH_RESULT, payload: { loading: true } }
}

const setSearchResultErrorTrue = function () {
    return { type: SET_SEARCH_RESULT, payload: { error: true } }
}

const setSearchSuggestion = function (data) {
    return { type: SET_SEARCH_SUGGESTION, payload: { loading: false, data: data } }
}

const setSearchSuggestionLoadingTrue = function () {
    return { type: SET_SEARCH_SUGGESTION, payload: { loading: true } }
}

const setSearchSuggestionErrorTrue = function () {
    return { type: SET_SEARCH_SUGGESTION, payload: { error: true } }
}

export const fetchSearchResult = function (query, category, filter) {
    return dispatch => {
        dispatch(setSearchResultLoadingTrue());
        axios
            .get(SEARCH_BUSINESS(category, query, filter))
            .then(res => {
                let result = res.data;
                if (result.status) {
                    dispatch(setSearchresult(result.payload));
                }
                else {
                    dispatch(setSearchResultErrorTrue());
                }
            })
            .catch(err => {
                dispatch(setSearchResultErrorTrue());
            })
    }
}

export const fetchSearchSuggestion = function () {
    return dispatch => {
        dispatch(setSearchSuggestionLoadingTrue());
        axios
            .get()
            .then(res => {
                dispatch(setSearchSuggestion(res.data));
            })
            .catch(err => {
                dispatch(setSearchSuggestionErrorTrue())
            })
    }
}

export const selectData = function (data) {
    return { type: SELECT_DATA, payload:data }
}

export const setSearchQuery = function (query) {
    return { type: SET_SEARCH_QUERY, payload: query }
}

export const setSearchCategory = function (category) {
    return { type: SET_SEARCH_CATEGORY, payload: category }
}

export const setSearchFilterLocation = function (location) {
    return { type: SET_SEARCH_FILTER, payload: { location: true, speciality: false, value: location } }
}

export const setSearchFilterSpeciality = function (speciality) {
    return { type: SET_SEARCH_FILTER, payload: { location: false, speciality: true, value: speciality } }
}

