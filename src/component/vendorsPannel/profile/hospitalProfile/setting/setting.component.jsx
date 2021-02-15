import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './setting.styles.scss';

//importing custom components
import SettingHome from './settingHome/settingHome.component';

//importing custom component from registration
import DoctorAndHospitalRegistrationForm from '../../../registration/doctorAndHospitalRegistrationForm/doctorAndHospitalRegistrationForm.component';
import AddStaff from '../../../registration/addStaff/addStaff.component';
import PaymentSetting from '../../../registration/paymentSetting/paymentSetting.component';

const Setting = ({ match }) => {
    return (
        <div className="vendorProfileSetting">
            <Switch>
                <Route exact path={`${match.url}/`} component={SettingHome} />
                <Route path={`${match.url}/addPannel`} component={DoctorAndHospitalRegistrationForm} />
                <Route path={`${match.url}/addStaff`} component={AddStaff} />
                <Route path={`${match.url}/paymentSetting`} component={PaymentSetting} />
                <Redirect to='/404' />
            </Switch>
        </div>
    );
}

export default Setting;