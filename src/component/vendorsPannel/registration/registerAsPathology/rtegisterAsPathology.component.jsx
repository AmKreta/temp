import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './registerAsPathology.styles.scss';

//importing custom components
import PathologyRegistrationHome from './pathologyRegistrationHome/pathologyRegistrationHome.component';
import AddTimings from '../addTimings/addTimings.component';
import AddTest from './addTest/addTest.component';
import AddStaff from '../addStaff/addStaff.component';
import PaymentSetting from '../paymentSetting/paymentSetting.component';
import CollectionSetting from './collectionSetting/collectionSetting.component';

//importing routes
import { ADD_TIMINGS, ADD_STAFF, COLLECTION_SETTING, ADD_TESTS, PAYMENT_SETTING } from '../routes';


const RegisterAsPathology = ({ match }) => {
    return (
        <div className="registerAsPathology">
            <Switch>
                <Route exact path={`${match.url}/`} component={PathologyRegistrationHome} />
                <Route path={`${match.url}/${ADD_TIMINGS}/`} component={AddTimings} />
                <Route path={`${match.url}/${ADD_STAFF}/`} component={AddStaff} />
                <Route path={`${match.url}/${PAYMENT_SETTING}/`} component={PaymentSetting} />
                <Route path={`${match.url}/${COLLECTION_SETTING}/`} component={CollectionSetting} />
                <Route path={`${match.url}/${ADD_TESTS}/`} component={AddTest} />
                <Redirect to='/404' />
            </Switch>
        </div>
    );
}

export default RegisterAsPathology;