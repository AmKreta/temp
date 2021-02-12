import { SET_TEST_AND_PRODUCT_LIST } from './myProductsAndTestActionTypes';

export const setProductsAndTestList = (payload) => {
    return { type: SET_TEST_AND_PRODUCT_LIST, payload }
}