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

const initialState = {
    name: '',
    address: '',
    degree: '',
    phoneNumber: '',
    fees: '',
    timeSlotPerPatient: '',
    feesCollectOnAccountOf: { Hospital: false, doctor: false },
    teleConsluting: false,
    timing: {
        monday: {
            isSelected:false, morning: { from: '', to: '' }, evening: { from: '', to: '' }
        },
        tuesday: {
            isSelected:false, morning: { from: '', to: '' }, evening: { from: '', to: '' }
        },
        wednesday: {
            isSelected:false, morning: { from: '', to: '' }, evening: { from: '', to: '' }
        },
        thursday: {
            isSelected:false, morning: { from: '', to: '' }, evening: { from: '', to: '' }
        },
        friday: {
            isSelected:false, morning: { from: '', to: '' }, evening: { from: '', to: '' }
        },
        saturday: {
            isSelected:false, morning: { from: '', to: '' }, evening: { from: '', to: '' }
        },
        sunday: {
            isSelected:false, morning: { from: '', to: '' }, evening: { from: '', to: '' }
        }
    }
}

const doctorAndHospitalRegistrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME:
            return { ...state, name: action.payload };
        case SET_ADDRESS:
            return { ...state, address: action.payload };
        case SET_DEGREE:
            return { ...state, degree: action.payload };
        case SET_FEES:
            return { ...state, fees: action.payload };
        case SET_PHONE_NO:
            return { ...state, phoneNumber: action.payload }
        case SET_TIME_SLOT_PER_PATIENT:
            return { ...state, timeSlotPerPatient: action.payload };
        case SET_FEES_COLLECT_ON_ACCOUNT_OF:
            return { ...state, feesCollectOnAccountOf: action.payload };
        case SET_TELECONSULTING:
            return { ...state, teleConsluting: action.payload };
        case SET_TIMINGS:
                return {
                ...state,
                timing: {
                    ...state.timing,
                    [action.payload.day]: action.payload.timings
                }
            };
        default:
            return state
    }
}

export default doctorAndHospitalRegistrationReducer;
