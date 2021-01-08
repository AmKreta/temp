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
            if (!action.type.includes('@@redux/')) {
                console.log(`action type ${action.type} is not defined for locationReducer`);
            }
            return state;
    }
}

export default locationReducer