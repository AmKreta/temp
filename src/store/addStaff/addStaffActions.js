import { SET_STAFF, REMOVE_STAFF } from './addStaffActionTypes';

export const setStaff = ({ name, phoneNo, designation }) => {
    return { type: SET_STAFF, payload: { name, phoneNo, designation } }
}

export const removeStaff = (index) => {
    return { type: REMOVE_STAFF, payload: index }
}