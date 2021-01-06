import { createStore } from 'redux';

const initialState = {
    isLoggedIn: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'sucessfulLogin':
            return { ...initialState, isLoggedIn: true };
        default:
            if(action.type.includes('@redux/INIT')){
                console.log('reducer method initialized');
            }
            else{
                console.log(action,' is not defined in te reducer method');
            }
            
    }
}

const store = createStore(reducer);

export default store;

