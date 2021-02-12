import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './registration.styles.scss';

//custom Component
import WelcomeOtpScreen from './welcomeOtpScreen/welcomeOtpScreen.component';
import BusinessInfoForm from './businessInfoForm/businessInfoForm.component';
import RegisterAs from './registerAs/registerAs.component';
import RegisterAsDoctor from './registerAsDoctor/registerAsDoctor.component';
import RegisterAsHospital from './registerAsHospital/registerAsHospital.component';
import RegisterAsPharmacy from './registerAsPharmacy/registerAsPharmacy.component';
import RegisterAsPathology from './registerAsPathology/rtegisterAsPathology.component';

//importing Routes
import {
    ADD_BUSINESS_INFO,
    REGISTER_AS_DOCTOR,
    REGISTER_AS_HOSPITAL,
    REGISTER_AS_PATHOLOGY,
    REGISTER_AS_PHARMACY,
    GET_OTP
} from './routes';

const Registration = ({ match, location }) => {
    const [countryCode, setCountryCode] = useState({ code: '+91', shortHand: 'IND', name: 'India' });
    const [registrationDivHeight, setRegistrationDivHeight] = useState('100%');

    useEffect(() => {
        if (location.pathname.includes('/registerAs')) {
            setRegistrationDivHeight('80%')
        }
        else {
            setRegistrationDivHeight('100%')
        }
    }, [location.pathname, setRegistrationDivHeight]);

    return (
        <div className="registrationContainer" style={{ height: registrationDivHeight }}>
            {
                <Switch>
                    <Route exact path={`${match.url}/`} component={RegisterAs} />
                    <Route path={`${match.url}/${GET_OTP}`} render={({ history, match }) => <WelcomeOtpScreen {...{ history, match, countryCode, setCountryCode }} />} />
                    <Route path={`${match.url}/${ADD_BUSINESS_INFO}`} render={({ history, match }) => <BusinessInfoForm {...{ history, match, countryCode }} />} />
                    <Route path={`${match.url}/${REGISTER_AS_DOCTOR}`} component={RegisterAsDoctor} />
                    <Route path={`${match.url}/${REGISTER_AS_HOSPITAL}`} component={RegisterAsHospital} />
                    <Route path={`${match.url}/${REGISTER_AS_PHARMACY}`} component={RegisterAsPharmacy} />
                    <Route path={`${match.url}/${REGISTER_AS_PATHOLOGY}`} component={RegisterAsPathology} />
                    <Redirect to='/404' />
                </Switch>
            }
        </div>
    );
}

export default Registration;