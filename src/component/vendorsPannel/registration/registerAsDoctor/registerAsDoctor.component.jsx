import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './registerAsDoctor.styles.scss';

//routes names
import { ADD_HOSPITALS, PAYMENT_SETTING } from '../routes';

//custom components
import DoctorsRegistrationHome from './doctorsRegistrationHome/doctorsRegistrationHome.component';
import AddHospitals from './addHospitals/addHospitals.component';
import PaymentSetting from '../paymentSetting/paymentSetting.component';

const RegisterAsDoctor = ({ match }) => {
    return (
        <div className="registerAsDoctor">
            <Switch>
                <Route exact path={`${match.url}/`} component={DoctorsRegistrationHome} />
                <Route path={`${match.url}/${ADD_HOSPITALS}`} component={AddHospitals} />
                <Route path={`${match.url}/${PAYMENT_SETTING}`} component={PaymentSetting} />
                <Redirect to='/404' />
            </Switch>
        </div>
    );
}

export default RegisterAsDoctor;