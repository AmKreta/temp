import { SET_STAFF, REMOVE_STAFF } from './addStaffActionTypes';

const initialState = {
    staffArray: []
};

const addStaffReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STAFF:
            return { staffArray: [...state.staffArray, action.payload] };
        case REMOVE_STAFF:
            let arr = [...state.staffArray];
            arr.splice(action.payload, 1);
            console.log(arr);
            return { staffArray: arr };
        default:
            return state;
    }
}

export default addStaffReducer;