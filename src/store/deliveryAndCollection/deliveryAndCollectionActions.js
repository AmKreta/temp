import {
    SET_COD_AVAILABLE,
    SET_CHARGES_PER_ORDER,
    SET_MINIMUM_AMMOUNT,
    SET_REPORT_HARDCOPY_DELIVERY_CHARGES,
    SET_DISTANCE,
    SET_AVAILABLE_AT
} from './deliveryAndCollectionActionTypes';

export const setDeliveryAndCollectionCodAvailable = (option) => {
    return { type: SET_COD_AVAILABLE, payload: option };
}

export const setDeliveryAndCollectionChargesperOrder = (charges) => {
    return { type: SET_CHARGES_PER_ORDER, payload: charges };
}

export const setDeliveryAndCollectionMininumAmmount = (minAmmount) => {
    return { type: SET_MINIMUM_AMMOUNT, payload: minAmmount };
}

export const setDeliveryAndCollectionHardcopyDeliveryCharges = (hardcopyDeliveryCharges) => {
    return { type: SET_REPORT_HARDCOPY_DELIVERY_CHARGES, payload: hardcopyDeliveryCharges }
}

export const setDeliveryAndCollectionAvailableAt = ({ customerAddress = true, pickUpByCustomer = false }) => {
    return { type: SET_AVAILABLE_AT, payload: { customerAddress, pickUpByCustomer } };
}

export const setDeliveryAndCollectionDistance = (distance) => {
    return { type: SET_DISTANCE, payload: distance };
}
