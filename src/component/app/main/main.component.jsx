import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './main.styles.scss'

// importing custom components
import Home from './home/home.component';
import DoctorBooking from './doctorBooking/doctorBooking.component';
import PharmacyOrder from './pharmacyOrder/pharmacyOrder.component';
import HospitalBooking from './hospitalBooking/hospitalBooking.component';
import LabOrder from './labOrder/labOrder.component';

const main = ({ match }) => {
    return (
        <main className='appMain'>
            <Switch>
                <Route exact path={`${match.url}/`} component={Home} />
                <Route exact path={`${match.url}/doctorBooking`} component={DoctorBooking} />
                <Route exact path={`${match.url}/pharmacyOrder`} component={PharmacyOrder} />
                <Route exact path={`${match.url}/hospitalBooking`} component={HospitalBooking} />
                <Route exact path={`${match.url}/labOrder`} component={LabOrder} />
            </Switch>
        </main>
    );
}

export default withRouter(main);