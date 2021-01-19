import { SET_USER_NAME, SET_PHONE_NO, SET_OTP } from './loginActionsTypes';

export const setUserName = function (userName) {
    return { type: SET_USER_NAME, payload: userName }
}

export const setPhoneNo = function (phoneNo) {
    return { type: SET_PHONE_NO, payload: phoneNo }
}

export const setOtpSendingTrue = function () {
    return { type: SET_OTP, payload: { sending: true, sent: false } }
}

export const setOtpSentTrue = function () {
    return { type: SET_OTP, payload: { sending: false, sent: true } }
}

export const setOtpEnabledTrue = function () {
    return { type: SET_OTP, payload: { enabled: true } }
}

export const setOtp = function (otpArray) {
    return { type: SET_OTP, payload: { value: otpArray } }
}

export const setOtpErrorTrue = function () {
    return { type: SET_OTP, payload: { error: true } }
}