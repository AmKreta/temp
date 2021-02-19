import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './setting.styles.scss';

//importing custom components
import SettingHome from './settingHome/settingHome.component';

//importing custom components from registration
import DeliverySetting from '../../../registration/deliveryAndCollectionSetting/deliveryAndCollectionSetting.component';
import PaymentSetting from '../../../registration/paymentSetting/paymentSetting.component';
import AddTiming from '../../../registration/addTimings/addTimings.component';
import AddStaff from '../../../registration/addStaff/addStaff.component';

const Setting = ({ match }) => {
    return (
        <div className="vendorProfileSetting">
            <Switch>
                <Route exact path={`${match.url}/`} component={SettingHome} />
                <Route path={`${match.url}/deliverySetting`} component={DeliverySetting} />
                <Route path={`${match.url}/paymentSetting`} component={PaymentSetting} />
                <Route path={`${match.url}/addTiming`} component={AddTiming} />
                <Route path={`${match.url}/addStaff`} component={AddStaff} />
                <Redirect to='/404' />
            </Switch>
        </div>
    );
}

export default Setting;