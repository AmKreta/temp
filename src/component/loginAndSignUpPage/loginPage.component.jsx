import React, { useEffect } from 'react';
import axios from 'axios';
import './loginPage.styles.scss';
import { connect } from 'react-redux';

//importing icons
import { Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import StorefrontIcon from '@material-ui/icons/Storefront';

//custom components
import OtpInput from './otpInput/otpInput.component';
import Input from './input/input.component';

//reusableComponent
import SecondaryIconButton from '../reusableComponent/secondaryIconButton.component';

//importing actions
import { setUserName, setPhoneNo, setOtpEnabledTrue, setOtpSendingTrue, setOtpWrongTrue, setOtpErrorTrue } from '../../actions/action';

//importing services
import { VERIFY_OTP } from '../../services/services';


const LoginPage = ({ history, userName, phoneNo, otp, setUserName, setPhoneNo, setOtpEnabledTrue, setOtpSendingTrue, setOtpWrongTrue }) => {

    useEffect(() => {
        if (phoneNo.length === 10 && !otp.enabled) {
            setOtpEnabledTrue();
            setOtpSendingTrue();
        }
    }, [phoneNo, otp.enabled, setOtpEnabledTrue, setOtpSendingTrue]);

    const signIn = (e) => {
        const reqBody = { phoneNumber: phoneNo.toString(), otp: otp.value.join('') };
        //const headers = { "Access-Control-Allow-Origin": "*" }
        axios
            .post(VERIFY_OTP, reqBody)
            .then(res => res.data)
            .then(data => {
                if (data.status) {
                    history.push('/allowAccess');
                }
                else {
                    setOtpWrongTrue();
                }
            })
            .catch(err => {
                setOtpErrorTrue();
            });
    }

    return (
        <div className="loginPage">

            <div className="signUpContent">
                <SecondaryIconButton label='User Login'>
                    <AccountCircleIcon />
                </SecondaryIconButton>

                <Input value={userName} onChange={(e) => { setUserName(e.target.value) }} placeholder='user name'>
                    <AccountCircleIcon />
                </Input>

                <Input type='number' value={phoneNo} onChange={(e) => { setPhoneNo(e.target.value) }} placeholder='phone no.'>
                    <PhoneIcon />
                </Input>

                <OtpInput />

                <Button fullWidth variant='contained' color='primary' onClick={signIn} >Sign In</Button>
            </div>

            <div className="signUpPageFooter">
                <SecondaryIconButton label='Store Login'>
                    <StorefrontIcon />
                </SecondaryIconButton>
                <h4>Or</h4>
                <h4>Set up your store here </h4>
            </div>

        </div >
    );
}

const mapStateToProps = state => ({
    userName: state.login.userName,
    phoneNo: state.login.phoneNo,
    otp: state.login.otp
});

const mapDispatchToProps = dispatch => ({
    setUserName: (val) => dispatch(setUserName(val)),
    setPhoneNo: (val) => dispatch(setPhoneNo(val)),
    setOtpEnabledTrue: () => dispatch(setOtpEnabledTrue()),
    setOtpSendingTrue: () => dispatch(setOtpSendingTrue()),
    setOtpWrongTrue: () => dispatch(setOtpWrongTrue()),
    setOtpErrorTrue: () => dispatch(setOtpErrorTrue())
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
