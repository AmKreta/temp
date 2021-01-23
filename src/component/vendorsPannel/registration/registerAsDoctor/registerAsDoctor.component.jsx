import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './registerAsDoctor.styles.scss';

//routes names
import { ADD_DETAILS, PAYMENT_SETTING, PROFILE } from '../routes';

//custom components
import DoctorsRegistrationHome from './doctorsRegistrationHome/doctorsRegistrationHome.component';
import DoctorsRegistrationForm from './doctorRegistrationForm/doctorsRegistrationForm.component';
import PaymentSetting from '../paymentSetting/paymentSetting.component';

const RegisterAsDoctor = ({ match }) => {
    return (
        <div className="registerAsDoctor">
            <Switch>
                <Route exact path={`${match.url}/`} component={DoctorsRegistrationHome} />
                <Route path={`${match.url}/${ADD_DETAILS}`} component={DoctorsRegistrationForm} />
                <Route path={`${match.url}/${PAYMENT_SETTING}`} component={PaymentSetting} />
                <Redirect to='/404' />
            </Switch>
        </div>
    );
}

export default RegisterAsDoctor;