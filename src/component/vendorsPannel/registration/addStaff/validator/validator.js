import { isValidElement } from "react";

export function isName(name) {
    let isValid = true;
    if (name.length === 0 || /\d/.test(name) === true) {
        //ie contains digit
        isValid = false;
    }
    console.log(isValid);
    return isValid;
}

export function isPhoneNo(no) {
    let isValid = true;
    if (no.length === 0 || /^\d+$/.test(no) === false) {
        //ie contains letters
        isValid = false;
    }
    console.log(isValid);
    return isValid;
}