import React, { useRef, useCallback } from 'react';
import './phoneNoInput.styles.scss';

const Input = ({ value, Ref, index, changeHandler }) => {
    return (
        <input type='number' value={value} index={index} onChange={changeHandler} ref={Ref} />
    );
}

const PhoneNoInput = ({ phoneNo, setPhoneNo, countryCode, setCountryCode }) => {

    const refArray = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    const changeHandler = useCallback((e) => {
        let index = parseInt(e.target.getAttribute('index'));
        setPhoneNo(prevState => {
            let newPhoneNo = [...prevState];
            newPhoneNo[index] = e.target.value;
            return newPhoneNo;
        });
        // changing curor position
        if (index < refArray.length - 1 && refArray[index + 1].current.value === '' && e.target.value !== '') {
            // ie if the input is not the last one 
            // and
            //next input container doesn't have some value
            refArray[index + 1].current.focus();
        }
    }, [setPhoneNo]);

    return (
        <div className="welcomeScreenPhoneNoInputContainer">
            <div className="copuntryCode">
                <div className="country">

                </div>
                <div className="code">
                    <p>{countryCode.code}</p>
                </div>
            </div>
            <div className="phoneNoInputContainer">
                {
                    phoneNo.map(
                        (item, index) =>
                            <Input
                                key={index}
                                value={item}
                                Ref={refArray[index]}
                                index={index}
                                changeHandler={changeHandler}
                            />
                    )
                }
            </div>
        </div>
    );
}

export default PhoneNoInput;