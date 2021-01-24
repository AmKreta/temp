import {
    SET_ONLINE_PAYMENT,
    SET_PAYMENT_OPTION,
    SET_UPI_ID,
    SET_BANK_IFSC,
    SET_BANK_ACCOUNT_NO
} from './paymentDetailsActionTypes';

const initialState = {
    onlinePaymentAvailable: true,
    mode: { upi: true, bankTransfer: false },
    upiID: '',
    IFSC: '',
    accountNumber: ''
}

const paymentDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ONLINE_PAYMENT:
            return { ...state, onlinePaymentAvailable: action.payload };
        case SET_PAYMENT_OPTION:
            return { ...state, mode: action.payload };
        case SET_UPI_ID:
            return { ...state, upiID: action.payload };
        case SET_BANK_IFSC:
            return { ...state, IFSC: action.payload };
        case SET_BANK_ACCOUNT_NO:
            return { ...state, accountNumber: action.payload };
        default:
            return state;
    }
}

export default paymentDetailsReducer;
