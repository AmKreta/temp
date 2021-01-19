import { SET_LOCATION } from './locationActionTypes';

const initialSatte = {
    state: null,
    city: null
}

const locationReducer = (state = initialSatte, action) => {
    switch (action.type) {
        case SET_LOCATION:
            return { state: action.payload.city, city: action.payload.city };
        default:
            return state;
    }
}

export default locationReducer