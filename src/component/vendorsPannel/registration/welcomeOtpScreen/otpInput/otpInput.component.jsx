import React, { useCallback, useRef } from 'react';
import './otpInput.styles.scss';

const Input = React.forwardRef((props, ref) => {
    return (
        <input type='number' value={props.value} onChange={props.changeHandler} maxLength={1} index={props.index} ref={ref} />
    );
})

const OtpInput = ({ otp, setOtp }) => {

    const refArray = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    const changeHandler = useCallback((e) => {
        let index = parseInt(e.target.getAttribute('index'));
        // changing curor position
        if (index < refArray.length - 1 && refArray[index + 1].current.value == '' && e.target.value !== '') {
            // ie if the input is not the last one 
            // and
            //next input container doesn't have some value
            refArray[index + 1].current.focus();
        }
        setOtp(prevState => {
            let newOtp = [...prevState];
            newOtp[index] = e.target.value;
            return newOtp;
        })
    }, [setOtp, otp]);

    return (
        <div className="welcomeScreenOtpInputContainer">
            {
                otp.map((item, index) => <Input value={item} changeHandler={changeHandler} ref={refArray[index]} index={index} key={index} />)
            }
        </div>
    );
}

export default OtpInput;