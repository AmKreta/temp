import { SET_ACTIVE_TAB, SET_AVAILABLE_TODAY, SET_AVAILABLE_TOMORROW, SET_ACTIVE_ITEM } from './availableTimingsActionTypes';

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
    activeTab: null,//three tabs infoCard,available today and available tomorrow
    activeItem: null// which among the available items in a tab is selected 
}

const availableTimingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_TAB:
            return { ...state, activeTab: action.payload }
        case SET_AVAILABLE_TODAY:
            return { ...state, availableToday: { ...state.availableToday, ...action.payload } }
        case SET_AVAILABLE_TOMORROW:
            return { ...state, availableTomorrow: { ...state.availableTomorrow, ...action.payload } }
        case SET_ACTIVE_ITEM:
            return { ...state, activeItem: action.payload }
        default:
            return state;
    }
}

export default availableTimingsReducer;