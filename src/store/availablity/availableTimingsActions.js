import { SET_AVAILABLE_TODAY, SET_AVAILABLE_TOMORROW, SET_ACTIVE_TAB, SET_ACTIVE_ITEM } from './availableTimingsActionTypes';
import axios from 'axios';

export const fetchAvailableToday = function () {
    return (dispatch) => {
        dispatch({ type: SET_AVAILABLE_TODAY, payload: { loading: true } });
        axios
            .get('')
            .then(res => {
                dispatch({ type: SET_AVAILABLE_TODAY, payload: { loading: false, data: res.data } });
            })
            .catch(err => {
                dispatch({ type: SET_AVAILABLE_TODAY, payload: { loading: false, error: true } });
            });
    }
}

export const fetchAvailableTomorrow = function () {
    return (dispatch) => {
        dispatch({ type: SET_AVAILABLE_TOMORROW, payload: { loading: true } })
        axios
            .get('')
            .then(res => {
                dispatch({ type: SET_AVAILABLE_TOMORROW, payload: { loading: false, data: res.data } });
            })
            .catch(err => {
                dispatch({ type: SET_AVAILABLE_TOMORROW, payload: { loding: false, error: true } });
            });
    }
}

export const setActiveTab = function (tab) {
    return { type: SET_ACTIVE_TAB, payload: tab }
}

export const setActiveTabNull = function () {
    return { type: SET_ACTIVE_TAB, payload: null }
}

export const setActiveItem = function (item) {
    //store all data required to form a card
    return { type: SET_ACTIVE_ITEM, payload: item }
}

export const setActiveItemNull = function () {
    return { type: SET_ACTIVE_ITEM, payload: null }
}