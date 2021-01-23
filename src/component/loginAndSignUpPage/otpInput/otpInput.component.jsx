import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import './otpInput.styles.scss';

//reusable component
import Loader from '../../reusableComponent/loading/loading.component';

//importing actions
import { setOtpSendingTrue, setOtpSentTrue, setOtp, setOtpErrorTrue } from '../../../actions/action';

//importing services
import { GET_OTP } from '../../../services/services';

const OtpInput = ({ otp, setOtp, setOtpSendingTrue, setOtpSentTrue, setOtpErrorTrue, phoneNo }) => {

    var timerInterval = useRef(null);
    const [timer, setTimer] = useState({ min: 0, sec: 10 });
    const [isTimerStatrted, setTimerStarted] = useState(false);

    const otpInputRef = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    //making request to get otp ,otp.enabled only runs once
    useEffect(() => {
        if (otp.enabled) {
            axios.post(GET_OTP, { mobileNumber: phoneNo.toString() })
                .then(res => {
                    console.log(res.data);
                    setOtpSentTrue();
                    //starting the timer
                    setTimerStarted(true);
                })
                .catch(err => {
                    setOtpErrorTrue();
                });
        }
    }, [otp.enabled, setOtpErrorTrue, setOtpSentTrue]);

    //starting timer when user have entered 10 digits mobile no.
    useEffect(() => {
        if (isTimerStatrted) {
            timerInterval.current = setInterval(() => {
                if (timer.min === 0 && timer.sec === 0) {
                    //if timer is 00:00
                    clearInterval(timerInterval.current);
                    setTimerStarted(false);
                }
                else {
                    setTimer(prevState => {
                        console.log(timerInterval);
                        if (prevState.sec === 0) {
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
            return () => {
                clearInterval(timerInterval.current);
            }
        }
    }, [isTimerStatrted, timer]);

    const setOtpByIndex = (value, index) => {
        let newOtpArray = otp.value;
        newOtpArray[index] = value;
        setOtp(newOtpArray);
        if (index < 5 && otpInputRef[index + 1].current.value === '' && otpInputRef[index].current.value !== '') {
            otpInputRef[index + 1].current.focus();
        }
    }

    const RresendHandler = (e) => {
        setOtpSendingTrue();
        setTimer({ min: 2, sec: 0 });
        axios.post(GET_OTP, { mobileNumber: phoneNo.toString() })
            .then(res => {
                console.log(res.data);
                setOtpSentTrue();
                //starting the timer
                setTimerStarted(true);
            })
            .catch(err => {
                setOtpErrorTrue();
            });
    }

    return (
        <div className={`otpInputContainer ${otp.enabled ? 'endabled' : 'disabled'}`}>
            <p>Enter sms code/otp</p>
            <div className="otpInput">
                <input type='number' value={otp.value[0]} onChange={(e) => { setOtpByIndex(e.target.value, 0) }} maxLength={1} ref={otpInputRef[0]} />
                <input type='number' value={otp.value[1]} onChange={(e) => { setOtpByIndex(e.target.value, 1) }} maxLength={1} ref={otpInputRef[1]} />
                <input type='number' value={otp.value[2]} onChange={(e) => { setOtpByIndex(e.target.value, 2) }} maxLength={1} ref={otpInputRef[2]} />
                <input type='number' value={otp.value[3]} onChange={(e) => { setOtpByIndex(e.target.value, 3) }} maxLength={1} ref={otpInputRef[3]} />
                <input type='number' value={otp.value[4]} onChange={(e) => { setOtpByIndex(e.target.value, 4) }} maxLength={1} ref={otpInputRef[4]} />
                <input type='number' value={otp.value[5]} onChange={(e) => { setOtpByIndex(e.target.value, 5) }} maxLength={1} ref={otpInputRef[5]} />
            </div>
            <div className="rightAlignedText">
                {
                    otp.error
                        ? <React.Fragment>
                            <span className="otpError">
                                something went wrong
                            </span>
                            <Button color='primary' onClick={RresendHandler}>Resend</Button>
                        </React.Fragment>
                        : null
                }
                {
                    otp.wrong
                        ? <React.Fragment>
                            <span className='otpError'>
                                otp entered is wrong
                            </span>
                            <Button color='primary' onClick={RresendHandler}>Resend</Button>
                        </React.Fragment>
                        : null
                }
                {
                    otp.sent
                        ? isTimerStatrted
                            ? <p className='resendIn'>Resend in - {timer.min < 10 ? `0${timer.min}` : timer.min}:{timer.sec < 10 ? `0${timer.sec}` : timer.sec}</p>
                            : <Button color='primary' onClick={RresendHandler}>Resend</Button>
                        : null
                }
                {
                    otp.sending
                        ? <Loader />
                        : null
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    otp: state.login.otp,
    phoneNo: state.login.phoneNo
});

const mapDispatchToProps = dispatch => ({
    setOtpSendingTrue: () => dispatch(setOtpSendingTrue()),
    setOtpSentTrue: () => dispatch(setOtpSentTrue()),
    setOtp: (otpArray) => dispatch(setOtp(otpArray)),
    setOtpErrorTrue: () => { dispatch(setOtpErrorTrue()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(OtpInput);