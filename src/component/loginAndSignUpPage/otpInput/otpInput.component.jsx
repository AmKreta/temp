import React, { useState, useEffect } from 'react';
import './otpInput.styles.scss';

import axios from 'axios';

const OtpInput = ({ otp, setOtp }) => {

    var timerInterval = null;
    const [timer, setTimer] = useState({ min: 2, sec: 0 });
    const [isTimerStatrted, setTimerStarted] = useState(false);

    useEffect(() => {
        if (isTimerStatrted) {
            timerInterval = setInterval(() => {
                if (timer.min == 0 && timer.sec == 0) {
                    //if timer is 00:00
                    clearInterval(timerInterval);
                    setTimerStarted(false);
                }
                else {
                    setTimer(prevState => {
                        if (prevState.sec == 0) {
                            //if timer is XX:00
                            return ({ min: prevState.min - 1, sec: 59 });
                        }
                        else {
                            //if timer is XX:XX
                            return ({ min: prevState.min, sec: prevState.sec - 1 });
                        }
                    })
                }
            }, 1000);
        }
    }, [isTimerStatrted]);

    useEffect(() => {
        //if otp is enabled set sending to true
        //then make async call 
        //tnen set sent to true and isTimerStarted to true to start the timer
        if (otp.enabled) {
            setOtp(prevState => ({ ...prevState, sending: true }));
            axios
                .post('', {})
                .then(res => {
                    setOtp(prevState => ({ ...prevState, sent: true, sending: false }));
                    setTimerStarted(true);
                })
                .catch(err => {
                    alert('something went wrong, refresh and start again');
                })
        }
    }, [otp]);

    return (
        <div className={`otpInputContainer ${otp.enabled ? 'endabled' : 'disabled'}`}>
            <p>Enter sms code/otp</p>
            <div className="otpInput">
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
            </div>
            {
                otp.sent
                    ? <p className='resendIn'>Resend in - {timer.min < 10 ? `0${timer.min}` : timer.min}:{timer.sec < 10 ? `0${timer.sec}` : timer.sec}</p>
                    : null
            }
            {
                otp.sending
                    ? 'loader'
                    : null
            }
        </div>
    );
}

export default OtpInput;