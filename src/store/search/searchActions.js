import { SET_SEARCH_RESULT, SET_SEARCH_QUERY, SET_SEARCH_SUGGESTION, SET_SEARCH_CATEGORY, SET_SEARCH_FILTER } from './searchActionTypes';

export const setSearchresult = function (data) {
    return { type: SET_SEARCH_RESULT, payload: { loading: false, data: data } }
}

export const setSearchResultLoadingTrue = function () {
    return { type: SET_SEARCH_RESULT, payload: { loading: true } }
}

export const setSearchResultErrorTrue = function () {
    return { type: SET_SEARCH_RESULT, payload: { error: true } }
}

export const setSearchQuery = function (query) {
    return { type: SET_SEARCH_QUERY, payload: query }
}

export const setSearchSuggestion = function (data) {
    return { type: SET_SEARCH_SUGGESTION, payload: { loading: false, data: data } }
}

export const setSearchSuggestionLoadingTrue = function () {
    return { type: SET_SEARCH_SUGGESTION, payload: { loading: true } }
}

export const setSearchSuggestionErrorTrue = function () {
    return { type: SET_SEARCH_SUGGESTION, payload: { error: true } }
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



