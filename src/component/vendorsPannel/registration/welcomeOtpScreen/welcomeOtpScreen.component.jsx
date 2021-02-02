import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './welcomeOtpScreen.styles.scss';

//importing custom components
import OtpInput from './otpInput/otpInput.component';
import PhoneNoInput from './phoneNoInput/phoneNoInput.component';

//importing routes
import {
    ADD_BUSINESS_INFO,
    REGISTER_AS_DOCTOR,
    REGISTER_AS_HOSPITAL,
    REGISTER_AS_PHARMACY,
    REGISTER_AS_PATHOLOGY
} from '../routes';

//importing services
import { GET_OTP, VERIFY_OTP } from '../../../../services/services';

//importing actions
import { setCurrentVendor } from '../../../../actions/action';

const WelcomeOtpScreen = ({ history, match, currentVendor, setCurrentVendor }) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [phoneNo, setPhoneNo] = useState(['', '', '', '', '', '', '', '', '', '']);
    const [countryCode, setCountryCode] = useState({ code: '+91', country: 'IND' });

    const getOtp = () => {
        axios
            .post(GET_OTP, { mobileNumber: phoneNo.join('') })
            .then(res => {
                if (res.data.payload.isRegistered) {
                    setCurrentVendor(res.data.payload);
                }
            })
            .catch(err => {
                alert('something went wrong');
            })
    }

    const verifyOtp = () => {
        /*axios
            .get(VERIFY_OTP)
            .then()
            .catch();*/

        let link = match.url.split('/');
        link.pop();
        if (currentVendor.isRegistered) {
            //deciding page to go on if user is verified
            let page = null;
            if (currentVendor.businessType === 'doctor') {
                page = REGISTER_AS_DOCTOR;
            }
            else if (currentVendor.businessType === 'hospital') {
                page = REGISTER_AS_HOSPITAL;
            }
            else if (currentVendor.businessType === 'pharmacy') {
                page = REGISTER_AS_PHARMACY;
            }
            else if (currentVendor.businessType === 'pathology') {
                page = REGISTER_AS_PATHOLOGY;
            }

            link.push(page);
            link = link.join('/');
            history.push(link);
        }
        else {
            link.push(ADD_BUSINESS_INFO);
            link = link.join('/');
            history.push(link);
        }
    }

    useEffect(() => {
        //action when phone no is input
        let check = () => {
            for (let i = 0; i < phoneNo.length; i++) {
                if (phoneNo[i] === '') {
                    return false;
                }
            }
            return true;
        }
        if (check()) {
            getOtp();
        }
    }, [phoneNo])

    useEffect(() => {
        //action when otp is input
        let check = () => {
            for (let i = 0; i < otp.length; i++) {
                if (otp[i] === '') {
                    return false;
                }
            }
            return true;
        }
        if (check()) {
            //history.push(`${match.url}/${ADD_BUSINESS_INFO}`);
            verifyOtp();
        }
    }, [otp]);

    return (
        <div className="welcomeOtpScreen">
            <div className="logo">
                <img
                    src='https://image.shutterstock.com/image-vector/medicine-logo-260nw-715548160.jpg'
                    alt='mediseen logo'
                />
            </div>
            <div className="welcomeScreenHeader">
                <h2>
                    Welcome To Mediseen Store
                </h2>
            </div>
            <div className="welcomeScreenInstructions">
                <p>
                    Enter Whatsaap number through which you want to communicate with your Patients.
                </p>
            </div>
            <div className="welcomeScreenPhoneNoInput">
                <PhoneNoInput {...{ phoneNo, setPhoneNo, countryCode, setCountryCode }} />
            </div>
            <div className="submissionButton">
                <button className='greenButton'>Send</button>
            </div>
            <div className="welcomeScreenOtpInput">
                <OtpInput {...{ otp, setOtp }} />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    currentVendor: state.currentVendor
});

const mapDispatchToProps = dispatch => ({
    setCurrentVendor: (payload) => dispatch(setCurrentVendor(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeOtpScreen);