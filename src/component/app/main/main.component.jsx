import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import './main.styles.scss'

// importing custom components
import Home from './home/home.component';
import DoctorBooking from './doctorBooking/doctorBooking.component';
import PharmacyOrder from './pharmacyOrder/pharmacyOrder.component';
import HospitalBooking from './hospitalBooking/hospitalBooking.component';
import LabOrder from './labOrder/labOrder.component';
import SearchPage from './searchPage/searchPage.component';
import UploadPrescription from './uploadPrescription/uploadPrescription.component';
import BookOrder from './bookOrder/bookOrder.component';
import AboutPage from './aboutPage/aboutPage.component';

const main = ({ match }) => {
    return (
        <main className='appMain'>
            <Switch>
                <Route exact path={`${match.url}/`} component={Home} />
                <Route path={`${match.url}/doctorBooking`} component={DoctorBooking} />
                <Route path={`${match.url}/pharmacyOrder`} component={PharmacyOrder} />
                <Route path={`${match.url}/hospitalBooking`} component={HospitalBooking} />
                <Route path={`${match.url}/labOrder`} component={LabOrder} />
                <Route path={`${match.url}/search/:category`} component={SearchPage} />
                <Route path={`${match.url}/uploadPrescription`} component={UploadPrescription} />
                <Route path={`${match.url}/about/:id`} component={AboutPage} />
                <Route path={`${match.url}/bookOrder/:category/:subCategory`} component={BookOrder} />
                <Redirect to='/404' />
            </Switch>
        </main>
    );
}

export default withRouter(main);