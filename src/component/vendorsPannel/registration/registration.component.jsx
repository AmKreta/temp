import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './registration.styles.scss';

//custom Component
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
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

const Registration = ({ match }) => {
    const [countryCode, setCountryCode] = useState({ code: '+91', shortHand: 'IND', name: 'India' });
    console.log(`${match.url}/${GET_OTP}`);
    return (
        <div className="registrationContainer">
            {
                <>
                    <Header />
                    <Switch>
                        <Route exact path={`${match.url}/`} component={RegisterAs} />
                        <Route path={`${match.url}/${GET_OTP}`} render={({ history, match }) => <WelcomeOtpScreen {...{ history, match, countryCode, setCountryCode }} />} />
                        <Route path={`${match.url}/${ADD_BUSINESS_INFO}`} render={({ history, match }) => <BusinessInfoForm {...{ history, match, countryCode }} />} />
                        <Route path={`${match.url}/${REGISTER_AS_DOCTOR}`} component={RegisterAsDoctor} />
                        <Route path={`${match.url}/${REGISTER_AS_HOSPITAL}`} component={RegisterAsHospital} />
                        <Route path={`${match.url}/${REGISTER_AS_PHARMACY}`} component={RegisterAsPharmacy} />
                        <Route path={`${match.url}/${REGISTER_AS_PATHOLOGY}`} component={RegisterAsPathology} />
                    </Switch>
                    <Footer />
                </>
            }
        </div>
    );
}

export default Registration;