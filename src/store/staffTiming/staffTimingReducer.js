import { SET_STAFF_TIMINGS, SET_STORE_OPEN } from './staffTimingActionTypes';

const initialState = {
    storeOpen24Hours: true,
    timing: {
        monday: {
            isSelected: false, morning: { from: '', to: '' }, evening: { from: '', to: '' }
        },
        tuesday: {
            isSelected: false, morning: { from: '', to: '' }, evening: { from: '', to: '' }
        },
        wednesday: {
            isSelected: false, morning: { from: '', to: '' }, evening: { from: '', to: '' }
        },
        thursday: {
            isSelected: false, morning: { from: '', to: '' }, evening: { from: '', to: '' }
        },
        friday: {
            isSelected: false, morning: { from: '', to: '' }, evening: { from: '', to: '' }
        },
        saturday: {
            isSelected: false, morning: { from: '', to: '' }, evening: { from: '', to: '' }
        },
        sunday: {
            isSelected: false, morning: { from: '', to: '' }, evening: { from: '', to: '' }
        }
    }
}

const timingAndStaffReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STORE_OPEN:
            return { ...state, storeOpen24Hours: action.payload };
        case SET_STAFF_TIMINGS:
            return {
                ...state,
                timing: {
                    ...state.timing,
                    [action.payload.day]: action.payload.timings
                }
            }
        default:
            return state;
    }
}

export default timingAndStaffReducer;
