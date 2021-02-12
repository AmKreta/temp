import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import locationReducer from './location/locationReducer';
import tokenReducer from './token/tokenReducer';
import loginReducer from './login/loginReducer';
import searchReducer from './search/searchReducer';
import availableTimingsReducer from './availablity/availableTimingsReducer';
import doctorAndHospitalRegistration from './doctorAndHospitalRegistration/doctorAndRegistrationReducer';
import paymentDetailsReducer from './paymentDetails/paymentDetailsReducer';
import staffTimingReducer from './staffTiming/staffTimingReducer';
import deliveryAndCollectionReducer from './deliveryAndCollection/deliveryAndCollecrionReducer';
import addStaffReducer from './addStaff/addStaffReducer';
import currentVendorReducer from './currentVendor/currentVendorReducer';
import myProductAndTestReducer from './myProductsAndTests/myProductsAndTestReducer';

const rootReducer = combineReducers({
    location: locationReducer,
    token: tokenReducer,
    login: loginReducer,
    search: searchReducer,
    availableTimings: availableTimingsReducer,
    doctorAndHospitalRegistration: doctorAndHospitalRegistration,
    paymentDetails: paymentDetailsReducer,
    timingAndStaff: staffTimingReducer,
    deliveryAndCollection: deliveryAndCollectionReducer,
    addStaff: addStaffReducer,
    currentVendor: currentVendorReducer,
    myProductsAndTests: myProductAndTestReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

