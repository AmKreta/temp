import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './registerAsHospital.styles.scss';

//custom Components
import HospitalRegistrationHome from './hospitalRegistrationHome/hospitalRegistrationHome.component';
import AddDoctors from './addDoctors/addDoctors.component';
import PaymentSetting from '../paymentSetting/paymentSetting.component';

//importing routes
import { ADD_DOCTORS, PAYMENT_SETTING } from '../routes';

const RegisterAsHospital = ({ match }) => {
    return (
        <div className="registerAsHospital">
            <Switch>
                <Route exact path={`${match.url}/`} component={HospitalRegistrationHome} />
                <Route path={`${match.url}/${ADD_DOCTORS}`} component={AddDoctors} />
                <Route path={`${match.url}/${PAYMENT_SETTING}`} component={PaymentSetting} />
                <Redirect to='/404' />
            </Switch>
        </div>
    );
}

export default RegisterAsHospital;