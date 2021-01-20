import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import locationReducer from './location/locationReducer';
import tokenReducer from './token/tokenReducer';
import loginReducer from './login/loginReducer';
import searchReducer from './search/searchReducer';
import availableTimingsReducer from './availablity/availableTimingsReducer';

const rootReducer = combineReducers({
    location: locationReducer,
    token: tokenReducer,
    login: loginReducer,
    search: searchReducer,
    availableTimings: availableTimingsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

