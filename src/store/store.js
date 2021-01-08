import { createStore, combineReducers } from 'redux';

import locationReducer from './location/locationReducer';
import tokenReducer from './token/tokenReducer';

const rootReducer = combineReducers({
    location: locationReducer,
    token: tokenReducer
});

const store = createStore(rootReducer);

export default store;

