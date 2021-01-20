import { SET_AVAILABLE_TODAY, SET_AVAILABLE_TOMORROW, SET_ACTIVE_TAB } from './availableTimingsActionTypes';
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
    return { type: SET_ACTIVE_TAB, payload: { activeTab: tab } }
}