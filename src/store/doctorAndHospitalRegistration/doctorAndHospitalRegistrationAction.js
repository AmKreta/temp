import {
    SET_NAME,
    SET_ADDRESS,
    SET_DEGREE,
    SET_PHONE_NO,
    SET_FEES,
    SET_TIME_SLOT_PER_PATIENT,
    SET_FEES_COLLECT_ON_ACCOUNT_OF,
    SET_TELECONSULTING,
    SET_TIMINGS
} from './doctorAndHospitalRegistrationActionTypes';

export const setName = (name) => {
    return { type: SET_NAME, payload: name };
}

export const setAddress = (address) => {
    return { type: SET_ADDRESS, payload: address };
}

export const setDegree = (degree) => {
    return { type: SET_DEGREE, payload: degree };
}

export const setPhoneNumber = (phoneNo) => {
    return { type: SET_PHONE_NO, payload: phoneNo };
}

export const setFees = (fees) => {
    return { type: SET_FEES, payload: fees };
}

export const setTimeSlotForpatient = (timeSlot) => {
    return { type: SET_TIME_SLOT_PER_PATIENT, payload: timeSlot };
}

export const setFeesCollectionOnAccountOf = ({ doctor = false, hospital = false }) => {
    return { type: SET_FEES_COLLECT_ON_ACCOUNT_OF, payload: { doctor, hospital } };
}

export const setTeleconsulting = (option = false) => {
    return { type: SET_TELECONSULTING, payload: option };
}

export const setTimings = ({ day, timings = { isSelected: false, morning: { from: '', to: '' }, evening: { from: '', to: '' } } }) => {
    return { type: SET_TIMINGS, payload: { day, timings } }
}
