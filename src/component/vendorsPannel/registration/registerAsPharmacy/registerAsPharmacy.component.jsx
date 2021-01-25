import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './registerAsPharmacy.styles.scss';

//importing custom components
import PharmacyRegistrationHome from './pharmacyRegistrationHome/pharmacyRegistrationHome.component';
import DeliverySetting from './deliverySetting/deliverySetting.component';
import PaymentSetting from '../paymentSetting/paymentSetting.component';
import AddStaff from '../addStaff/addStaff.component';
import AddTimings from '../addTimings/addTimings.component';
import AddProducts from './addProducts/addProducts.component';

//importing routes
import { ADD_TIMINGS, ADD_STAFF, DELIVERY_SETTING, PAYMENT_SETTING, ADD_PRODUCTS } from '../routes';

const RegisterAsPharmacy = ({ match }) => {
    return (
        <div className="registerAsPharmacy">
            <Switch>
                <Route exact path={`${match.url}/`} component={PharmacyRegistrationHome} />
                <Route path={`${match.url}/${DELIVERY_SETTING}`} component={DeliverySetting} />
                <Route path={`${match.url}/${ADD_TIMINGS}`} component={AddTimings} />
                <Route path={`${match.url}/${ADD_STAFF}`} component={AddStaff} />
                <Route path={`${match.url}/${PAYMENT_SETTING}`} component={PaymentSetting} />
                <Route path={`${match.url}/${ADD_PRODUCTS}`} component={AddProducts} />
                <Redirect to='/404' />
            </Switch>
        </div>
    );
}

export default RegisterAsPharmacy;