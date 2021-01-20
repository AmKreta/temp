import { SET_ACTIVE_TAB, SET_AVAILABLE_TODAY, SET_AVAILABLE_TOMORROW } from './availableTimingsActionTypes';

const initialState = {
    availableToday: {
        data: [],
        selectedData: null,
        loading: false,
        error: false
    },
    availableTomorrow: {
        data: [],
        selectedData: null,
        loading: false,
        error: false
    },
    activeTab: null
}

const availableTimingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_TAB:
            return { ...state, activeTab: action.payload }
        case SET_AVAILABLE_TODAY:
            return { ...state, availableToday: { ...state.availableToday, ...action.payload } }
        case SET_AVAILABLE_TOMORROW:
            return { ...state, availableTomorrow: { ...state.availableTomorrow, ...action.payload } }
    }
}

export default availableTimingsReducer;