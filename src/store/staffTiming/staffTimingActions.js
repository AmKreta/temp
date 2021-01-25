import { SET_STAFF_TIMINGS, SET_STORE_OPEN } from './staffTimingActionTypes';

export const setStoreOpen = (option) => {
    return { type: SET_STORE_OPEN, payload: option };
}

export const setStaffTiming = ({ day, timings = { isSelected: false, morning: { from: '', to: '' }, evening: { from: '', to: '' } } }) => {
    return { type: SET_STAFF_TIMINGS, payload: { day, timings } }
}
