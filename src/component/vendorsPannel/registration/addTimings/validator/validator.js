var errorFields = {};


function addToErrorsField(name, message) {
    if (errorFields[name]) {
        errorFields[name].push(message);
    }
    else {
        errorFields[name] = [message];
    }
}

export const VALIDATE = function (data) {
    errorFields = {};

    let workingHours = data.workingHours;

    console.log(data);

    //validating working hours
    let keys = Object.keys(workingHours);
    if (keys.length === 0) {
        addToErrorsField('workingHours', 'select atleast one working day');
    }
    keys.forEach(item => {
        if (workingHours[item].morning.from.includes('pm') || workingHours[item].morning.to.includes('pm')) {
            addToErrorsField(`workingHours ${item.toLowerCase()} `, 'morning shift contain time in pm');
        }
        if (workingHours[item].evening.from.includes('am') || workingHours[item].evening.to.includes('am')) {
            addToErrorsField(`workingHours ${item.toLowerCase()}`, 'evening shift contain time in am');
        }
        if (workingHours[item].morning.from.length === 0) {
            addToErrorsField(`workingHours ${item.toLowerCase()}`, `workingHours ${item} morning from is empty`);
        }
        if (workingHours[item].morning.to.length === 0) {
            addToErrorsField(`workingHours ${item.toLowerCase()}`, `workingHours ${item} morning to is empty`);
        }
        if (workingHours[item].evening.from.length === 0) {
            addToErrorsField(`workingHours ${item.toLowerCase()}`, `workingHours ${item} evening from is empty`);
        }
        if (workingHours[item].evening.to.length === 0) {
            addToErrorsField(`workingHours ${item.toLowerCase()}`, `workingHours ${item} evening to is empty`)
        }
    });

    return errorFields;
}