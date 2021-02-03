import { UPDATE_ACCESS_TOKEN } from './tokenActionTypes';

const initialState = { accessToken: null };

const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ACCESS_TOKEN:
            return { ...state, accessToken: action.payload }
        default:
            return state;
    }
}

export default tokenReducer;