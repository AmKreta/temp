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
    setOtpErrorTrue
} from '../store/login/loginActions';

//search Reducer
import {
    setSearchresult,
    setSearchResultLoadingTrue,
    setSearchResultErrorTrue,
    setSearchSuggestion,
    setSearchSuggestionLoadingTrue,
    setSearchSuggestionErrorTrue,
    setSearchQuery,
    setSearchCategory,
    setSearchFilterLocation,
    setSearchFilterSpeciality
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
    setSearchQuery,
    setSearchresult,
    setSearchResultLoadingTrue,
    setSearchSuggestionLoadingTrue,
    setSearchSuggestionErrorTrue,
    setSearchResultErrorTrue,
    setSearchSuggestion,
    setSearchCategory,
    setSearchFilterLocation,
    setSearchFilterSpeciality
};