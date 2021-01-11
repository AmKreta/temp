import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import './loginPage.styles.scss';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import StorefrontIcon from '@material-ui/icons/Storefront';

//custom components
import OtpInput from './otpInput/otpInput.component';
import Input from './input/input.component';

//reusableComponent
import SecondaryIconButton from '../reusableComponent/secondaryIconButton.component';


const LoginPage = ({ history }) => {
    const [username, setUserName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [otp, setOtp] = useState({ enabled: false, sending: false, sent: false, value: ['', '', '', '', '', ''] });

    useEffect(() => {
        if (phoneNo.length === 10 && !otp.enabled) {
            setOtp(prevState => ({ ...prevState, enabled: true }));
        }
    }, [phoneNo]);

    return (
        <div className="loginPage">

            <SecondaryIconButton label='User Login'>
                <AccountCircleIcon />
            </SecondaryIconButton>

            <Input value={username} onChange={(e) => { setUserName(e.target.value) }} placeHolder='user name'>
                <AccountCircleIcon />
            </Input>

            <Input value={phoneNo} onChange={(e) => { setPhoneNo(e.target.value) }} placeHolder='phone no.' >
                <PhoneIcon />
            </Input>

            <OtpInput {...{ otp, setOtp }} />

            <Button fullWidth variant='contained' color='primary' onClick={()=>history.push('/allowAccess')} >Sign In</Button>

            <div className="signUpPageFooter">
                <SecondaryIconButton label='Store Login'>
                    <StorefrontIcon />
                </SecondaryIconButton>
                <hgroup>
                    <h4>Or</h4>
                    <h4>Set up your stor here </h4>
                </hgroup>
            </div>

        </div>
    );
}

export default LoginPage;