import { SET_SEARCH_RESULT, SET_SEARCH_SUGGESTION, SET_SEARCH_QUERY, SET_SEARCH_FILTER, SET_SEARCH_CATEGORY, SELECT_DATA } from './searchActionTypes';

const initialState = {
    result: { loading: false, data: [], error: false },
    suggestion: { loading: false, data: [], error: false },
    category: 'All',
    filter: { location: false, speciality: false, value: '' },
    query: '',
    selectedData: null
};

const searchResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_QUERY:
            return { ...state, query: action.payload }
        case SET_SEARCH_CATEGORY:
            return { ...state, category: action.payload }
        case SELECT_DATA:
            return { ...state, selectedData: action.payload }
        case SET_SEARCH_SUGGESTION:
            return { ...state, suggestion: { ...state.suggestion, ...action.payload } }
        case SET_SEARCH_RESULT:
            return { ...state, result: { ...state.result, ...action.payload } }
        case SET_SEARCH_FILTER:
            return { ...state, filter: { ...state.filter, ...action.payload } }
        default:
            return state
    }
}

export default searchResultReducer;