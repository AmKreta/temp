import { createStore, combineReducers } from 'redux';

import locationReducer from './location/locationReducer';
import tokenReducer from './token/tokenReducer';
import loginReducer from './login/loginReducer';
import searchReducer from './search/searchReducer';
const rootReducer = combineReducers({
    location: locationReducer,
    token: tokenReducer,
    login: loginReducer,
    search: searchReducer
});

const store = createStore(rootReducer);

export default store;

