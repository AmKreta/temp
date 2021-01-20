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
    setActiveItemNull
};