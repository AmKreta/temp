// locationReducer actions
import { setLocation } from '../store/location/locationActions';

// tokenReducer actions
import { updateAccessToken } from '../store/token/tokenActions';

//otpReducer actions
import {
    setUserName,
    setPhoneNo,
    setOtp,
    setOtpEnabledTrue,
    setOtpSendingTrue,
    setOtpSentTrue,
    setOtpErrorTrue,
    setOtpWrongTrue
} from '../store/login/loginActions';

//availablity reducer to fecth available today and tomorrow list
import {
    fetchAvailableToday,
    fetchAvailableTomorrow,
    setActiveTab,
    setActiveTabNull,
    setActiveItem,
    setActiveItemNull
} from '../store/availablity/availableTimingsActions';

//search Reducer
import {
    fetchSearchResult,
    fetchSearchSuggestion,
    setSearchQuery,
    setSearchCategory,
    setSearchFilterLocation,
    setSearchFilterSpeciality,
    selectData
} from '../store/search/searchActions';

//doctorHospitalRegistrationForm
import {
    setName,
    setAddress,
    setDegree,
    setFees,
    setPhoneNumber,
    setTimeSlotForpatient,
    setFeesCollectionOnAccountOf,
    setTeleconsulting,
    setTimings
} from '../store/doctorAndHospitalRegistration/doctorAndHospitalRegistrationAction';

//payment Details reducer
import {
    setOnlinePayment,
    setPaymentOption,
    setUpiID,
    setBankIFSC,
    setBankAccountNumber
} from '../store/paymentDetails/paymentDetailsActions';

//timing and staff reducer
import {
    setStaffTiming,
    setStoreOpen
} from '../store/staffTiming/staffTimingActions';

//delivery and payment setting 
import {
    setDeliveryAndCollectionAvailableAt,
    setDeliveryAndCollectionChargesperOrder,
    setDeliveryAndCollectionCodAvailable,
    setDeliveryAndCollectionDistance,
    setDeliveryAndCollectionHardcopyDeliveryCharges,
    setDeliveryAndCollectionMininumAmmount
} from '../store/deliveryAndCollection/deliveryAndCollectionActions';


//staff 
import { setStaff, removeStaff } from '../store/addStaff/addStaffActions';

//current vendor
import { setCurrentVendor } from '../store/currentVendor/currentVendorActions';

//exporting all actions
export {
    setLocation,
    updateAccessToken,
    setUserName,
    setPhoneNo,
    setOtp,
    setOtpEnabledTrue,
    setOtpSendingTrue,
    setOtpSentTrue,
    setOtpErrorTrue,
    setOtpWrongTrue,
    setSearchQuery,
    fetchSearchResult,
    fetchSearchSuggestion,
    setSearchCategory,
    setSearchFilterLocation,
    setSearchFilterSpeciality,
    selectData,
    fetchAvailableToday,
    fetchAvailableTomorrow,
    setActiveTab,
    setActiveTabNull,
    setActiveItem,
    setActiveItemNull,
    setName,
    setAddress,
    setDegree,
    setFees,
    setPhoneNumber,
    setTimeSlotForpatient,
    setFeesCollectionOnAccountOf,
    setTeleconsulting,
    setTimings,
    setOnlinePayment,
    setPaymentOption,
    setUpiID,
    setBankIFSC,
    setBankAccountNumber,
    setStaffTiming,
    setStoreOpen,
    setDeliveryAndCollectionAvailableAt,
    setDeliveryAndCollectionChargesperOrder,
    setDeliveryAndCollectionCodAvailable,
    setDeliveryAndCollectionDistance,
    setDeliveryAndCollectionHardcopyDeliveryCharges,
    setDeliveryAndCollectionMininumAmmount,
    setStaff,
    removeStaff,
    setCurrentVendor
};
