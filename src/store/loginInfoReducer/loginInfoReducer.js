const actions = {
    NAME_CHANGED: 'nameChanged',
    PHONE_NO_CHANGED: 'phoneNoChanged',
    OTP_CHANGED: 'otpChanged'
}

const { NAME_CHANGED, PHONE_NO_CHANGED, OTP_CHANGED } = actions;

const LoginInfoReducer = (store = initialState.loginInfo, action) => {
    switch (action.type) {
        case NAME_CHANGED:
            return { ...store, name: action.payload }
        case PHONE_NO_CHANGED:
            return { ...store, phoneNo: action.payload }
        case OTP_CHANGED:
            return { ...store, otp: action.payload }
        default:
            console.log('action not defined in LoginInfoReducer');
    }
}
