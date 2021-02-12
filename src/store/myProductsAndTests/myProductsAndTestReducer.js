import { SET_TEST_AND_PRODUCT_LIST } from './myProductsAndTestActionTypes';

const initialState = [];

const myProductsAndTestReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEST_AND_PRODUCT_LIST:
            return action.payload;
        default:
            return state;
    }
}

export default myProductsAndTestReducer;
