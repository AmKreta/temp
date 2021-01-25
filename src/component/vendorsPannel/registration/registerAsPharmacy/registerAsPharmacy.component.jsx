import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './registerAsPharmacy.styles.scss';

//importing custom components
import PharmacyRegistrationHome from './pharmacyRegistrationHome/pharmacyRegistrationHome.component';
import PharmacyRegistrationDileverySetting from './pharmacyRegistrationDeliverySetting/pharmacyRegistrationDeliverySetting.component';
import PaymentSetting from '../paymentSetting/paymentSetting.component';
import AddStaff from '../addStaff/addStaff.component';
import AddTimings from '../addTimings/addTimings.component';

//importing routes
import { ADD_TIMINGS, ADD_STAFF, DELIVERY_SETTING, PAYMENT_SETTING } from '../routes';

const RegisterAsPharmacy = ({ match }) => {
    return (
        <div className="registerAsPharmacy">
            <Switch>
                <Route exact path={`${match.url}/`} component={PharmacyRegistrationHome} />
                <Route path={`${match.url}/${DELIVERY_SETTING}`} component={PharmacyRegistrationDileverySetting} />
                <Route path={`${match.url}/${ADD_TIMINGS}`} component={AddTimings} />
                <Route path={`${match.url}/${ADD_STAFF}`} component={AddStaff} />
                <Route path={`${match.url}/${PAYMENT_SETTING}`} component={PaymentSetting} />
                <Redirect to='/404' />
            </Switch>
        </div>
    );
}

export default RegisterAsPharmacy;