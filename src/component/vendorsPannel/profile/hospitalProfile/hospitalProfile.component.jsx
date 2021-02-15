import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './hospitalProfile.styles.scss';

//importing custom components
import Home from './home/home.component';
import Appointment from './appointment/appointment.component';
import Setting from './setting/setting.component';
import Promotions from './promotions/promotions.component';

const HospitalProfile = ({ match }) => {
    return (
        <div className="hospitalProfile">
            <Switch>
                <Route exact path={`${match.url}/`} render={({ match }) => <Redirect to={`${match.url}/home`} />} />
                <Route path={`${match.url}/home`} component={Home} />
                <Route path={`${match.url}/appointments`} component={Appointment} />
                <Route path={`${match.url}/setting`} component={Setting} />
                <Route path={`${match.url}/promotions`} component={Promotions} />
                <Redirect to='/404' />
            </Switch>
        </div>
    );
}

export default withRouter(HospitalProfile);