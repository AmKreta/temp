import { SET_CURRENT_VENDOR } from './currentvendorActionTypes';

const initialState = {
    isRegistered: false,
    businessType: '',
    businessName: '',
    address: '',
    area: '',
    pincode: '',
    street: '',
    city: '',
    state: '',
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    password: '',
    degree: '',
    specialist: '',
    documents: null,
    country: null
}

const currentVendorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_VENDOR:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

export default currentVendorReducer;
