import {
    SET_ONLINE_PAYMENT,
    SET_PAYMENT_OPTION,
    SET_UPI_ID,
    SET_BANK_IFSC,
    SET_BANK_ACCOUNT_NO
} from './paymentDetailsActionTypes';

export const setOnlinePayment = (option = false) => {
    return { type: SET_ONLINE_PAYMENT, payload: option };
}

export const setPaymentOption = ({ upi = false, bankTransfer = false }) => {
    return { type: SET_PAYMENT_OPTION, payload: { upi, bankTransfer } }
}

export const setUpiID = (upi) => {
    return { type: SET_UPI_ID, payload: upi }
}

export const setBankIFSC = (ifsc) => {
    return { type: SET_BANK_IFSC, payload: ifsc }
}

export const setBankAccountNumber = (accountNo) => {
    return { type: SET_BANK_ACCOUNT_NO, payload: accountNo }
}