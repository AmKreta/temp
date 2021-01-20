import { SET_USER_NAME, SET_PHONE_NO, SET_OTP } from './loginActionsTypes';

const initialState = {
    userName: '',
    phoneNo: '',
    otp: {
        enabled: false,
        sending: false,
        sent: false,
        value: ['', '', '', '', '', ''],
        error: false,
        wrong:false
    }
}

const loginReducer = function (state = initialState, action) {
    switch (action.type) {
        case SET_USER_NAME:
            return { ...state, userName: action.payload }
        case SET_PHONE_NO:
            return { ...state, phoneNo: action.payload }
        case SET_OTP:
            return { ...state, otp: { ...state.otp, ...action.payload } }
        default:
            return state;
    }
}

export default loginReducer;
