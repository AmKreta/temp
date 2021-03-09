let errorFields = {};

const addToErrorsField = (name, message) => {
    if (errorFields[name]) {
        errorFields[name].push(message);
    }
    else {
        errorFields[name] = [message];
    }
}

export function VALIDATE(data) {
    errorFields = {};

    let { upiId, reEnteredAccountNumber } = data;
    let { ifsc, accNum } = data.bankInfo;

    //validating upiId
    if (upiId.length !== 14 || !upiId.includes('@')) {
        addToErrorsField('upiId', 'upiId is invalid');
    }

    //validating IFSC
    if (ifsc.length !== 11) {
        addToErrorsField('ifsc', 'ifsc is invalid');
    }

    //validating account number
    if (accNum !== reEnteredAccountNumber) {
        addToErrorsField('reEnteredAccountNumber', 're-entered account number is not same as account number');
    }
    if (reEnteredAccountNumber === '') {
        addToErrorsField('reEnteredAccountNumber', 're-entered account number is empty');
    }

    if ((accNum.length >= 8 && accNum.length <= 18) && /^\d+$/.test(accNum) === false) {
        addToErrorsField('accountNumber', 'account number entered is not valid');
    }

    if (accNum.length === 0) {
        addToErrorsField('accountNumber', 'account number is empty');
    }

    return errorFields;
}