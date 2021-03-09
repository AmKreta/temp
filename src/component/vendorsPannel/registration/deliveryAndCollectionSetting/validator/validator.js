var errorsField = {};

function addToErrorsField(name, message) {
    if (errorsField[name]) {
        errorsField[name].push(message);
    }
    else {
        errorsField[name] = [message];
    }
}

export function deliveryValidator(data) {
    errorsField = {};
    let { type, deliveryCharges, minimumAmmount, codAvailable, deliveryDistance } = data.deliveryDetails;

    //validating type

    //validating collectionChargesPerVisit *
    if (deliveryCharges === '') {
        addToErrorsField('chargesPerOrder', 'field is empty');
    }
    if (!/^\d+$/.test(deliveryCharges)) {
        addToErrorsField('chargesPerOrder', 'field contains letters');
    }

    //validating minCollectionAmmount *
    if (minimumAmmount === '') {
        addToErrorsField('minOrderAmmount', 'field is empty');
    }
    if (!/^\d+$/.test(minimumAmmount)) {
        addToErrorsField('minOrderAmmount', 'contains letters');
    }

    //validating codAvailable

    //validating deliveryDistance

    //validating collectionDistance *
    if (deliveryDistance === '0') {
        addToErrorsField('distance', 'distance not set');
    }

    return errorsField;
}

export function collectionValidator(data) {
    errorsField = {};
    let { availablity, collectionChargesPerVisit, minCollectionAmmount, hardCopyReportDeliveryCharges, codAvailable, collectionDistance } = data.collections;

    //validating availablity

    //validating collectionChargesPerVisit *
    if (collectionChargesPerVisit === '') {
        addToErrorsField('chargesPerOrder', 'field is empty');
    }
    if (!/^\d+$/.test(collectionDistance)) {
        addToErrorsField('chargesPerOrder', 'field contains letters');
    }

    //validating minCollectionAmmount *
    if (minCollectionAmmount === '') {
        addToErrorsField('minOrderAmmount', 'field is empty');
    }
    if (!/^\d+$/.test(minCollectionAmmount)) {
        addToErrorsField('minOrderAmmount', 'contains letters');
    }
    //validating hardCopyReportDeliveryCharges

    //codAvailable

    //validating collectionDistance *
    if (collectionDistance === '0') {
        addToErrorsField('distance', 'distance not set');
    }

    return errorsField;
}