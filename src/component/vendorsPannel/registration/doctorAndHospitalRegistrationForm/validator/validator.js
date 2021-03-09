var errorFields = {};


function addToErrorsField(name, message) {
    if (errorFields[name]) {
        errorFields[name].push(message);
    }
    else {
        errorFields[name] = [message];
    }
}

export const VALIDATE = function (data, businessType) {
    errorFields = {};

    let { fee, feeCollect, name, teleConsulting, timePerSlot, workingHours } = data.clinic ? data.clinic : data.doctors;

    let degree, mobileNumber;
    let contact, address;

    if (data.doctors) {
        degree = data.doctors.degree;
        mobileNumber = data.doctors.mobileNumber;
    }

    if (data.clinic) {
        contact = data.clinic.contact;
        address = data.clinic.address;
    }

    if (businessType === 'doctor') {
        //validating address
        if (address.length === 0) {
            addToErrorsField('address', 'address is empty');
        }

        //validating contact 
        if (contact.length === 0) {
            addToErrorsField('contact', 'contact is empty');
        }
        if (contact.length !== 10) {
            addToErrorsField('contact', 'length of phone number is unacceptable');
        }
        if (!/^\d+$/.test(contact)) {
            //check if only contains number
            addToErrorsField('contact', 'phone number contains characters other than digits');
        }
    }
    else if (businessType === 'hospital') {

        //validating degree
        if (degree.length === 0) {
            addToErrorsField('degree', 'address is empty');
        }

        //validating mobile number 
        if (mobileNumber.length === 0) {
            addToErrorsField('mobile no.', 'contact is empty');
        }
        if (mobileNumber.length !== 10) {
            addToErrorsField('mobile no.', 'length of phone number is unacceptable');
        }
        if (!/^\d+$/.test(mobileNumber)) {
            //check if only contains number
            addToErrorsField('mobile no.', 'phone number contains characters other than digits');
        }
    }


    //validating fee
    if (fee.length === 0) {
        addToErrorsField('fee', 'fee is empty')
    }
    if (!/^\d+$/.test(fee)) {
        addToErrorsField('fee', 'fee contains characters other than digits')
    }

    //validating fee collect on account of
    if (!(feeCollect === 'doctor' || feeCollect === 'hospital')) {
        addToErrorsField('feeCollect', 'fee collection on account of not selected')
    }

    //validating name
    if (name.length === 0) {
        addToErrorsField('name', 'name is empty');
    }
    if (/\d/.test(name)) {
        addToErrorsField('name', 'name contains digits')
    }

    //validating teleconsulting
    if (!(teleConsulting === true || teleConsulting === false)) {
        addToErrorsField(teleConsulting, 'select a yes or no for teleconsulting')
    }

    //validating time slot per appointment
    if (timePerSlot.length === 0) {
        addToErrorsField('timePerSlot', 'time slot per appointment is empty');
    }
    if (!/\d/.test(timePerSlot)) {
        addToErrorsField('timePerSlot', 'time slot per patient contains characters other than digits');
    }
   
    //validating working hours
    let keys = Object.keys(workingHours);
    if (keys.length === 0) {
        addToErrorsField('workingHours', 'select atleast one working day');
    }
    keys.forEach(item => {
        
        if (workingHours[item].morning.from.includes('pm') || workingHours[item].morning.to.includes('pm')) {
            addToErrorsField(`workingHours ${item.toLowerCase()} `, 'morning shift contain time in pm');
        }
        if (workingHours[item].evening.from.includes('am') || workingHours[item].evening.to.includes('am')) {
            addToErrorsField(`workingHours ${item.toLowerCase()}`, 'evening shift contain time in am');
        }
        if (workingHours[item].morning.from.length === 0) {
            addToErrorsField(`workingHours ${item.toLowerCase()}`, `workingHours ${item} morning from is empty`);
        }
        if (workingHours[item].morning.to.length === 0) {
            addToErrorsField(`workingHours ${item.toLowerCase()}`, `workingHours ${item} morning to is empty`);
        }
        if (workingHours[item].evening.from.length === 0) {
            addToErrorsField(`workingHours ${item.toLowerCase()}`, `workingHours ${item} evening from is empty`);
        }
        if (workingHours[item].evening.to.length === 0) {
            addToErrorsField(`workingHours ${item.toLowerCase()}`, `workingHours ${item} evening to is empty`)
        }
    });


    return errorFields;
}