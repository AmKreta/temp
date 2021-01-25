import {
    SET_COD_AVAILABLE,
    SET_CHARGES_PER_ORDER,
    SET_MINIMUM_AMMOUNT,
    SET_REPORT_HARDCOPY_DELIVERY_CHARGES,
    SET_DISTANCE,
    SET_AVAILABLE_AT
} from './deliveryAndCollectionActionTypes';

const initialState = {
    availableAt: { customerAddress: true, pickUpByCustomer: false },
    chargesPerOrder: '',
    minimumAmmount: '',
    hardcopyDeliveryCharges: '',
    codAvailable: true,
    distance: '0'
}

const deliveryAndCollectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AVAILABLE_AT:
            return { ...state, availableAt: action.payload };
        case SET_COD_AVAILABLE:
            return { ...state, codAvailable: action.payload };
        case SET_CHARGES_PER_ORDER:
            return { ...state, chargesPerOrder: action.payload };
        case SET_MINIMUM_AMMOUNT:
            return { ...state, minimumAmmount: action.payload };
        case SET_REPORT_HARDCOPY_DELIVERY_CHARGES:
            console.log(action.payload);
            return { ...state, hardcopyDeliveryCharges: action.payload };
        case SET_DISTANCE:
            return { ...state, distance: action.payload }
        default:
            return state;
    }
}

export default deliveryAndCollectionReducer;