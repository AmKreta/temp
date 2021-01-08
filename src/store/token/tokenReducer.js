import { UPDATE_ACCESS_TOKEN } from './tokenActionTypes';

const initialState = { accessToken: null, refreshToken: null };

const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ACCESS_TOKEN:
            return { ...state, accessToken: action.payload }
        default:
            if (!action.type.includes('@@redux/')) {
                console.log(`action type ${action.type} not defined for token reducer`);
            }
            return state;
    }
}

export default tokenReducer;