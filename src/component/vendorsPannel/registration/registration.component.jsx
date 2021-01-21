import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './registration.styles.scss';

//custom Component
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import RegisterAs from './registerAs/registerAs.component';
import RegisterAsDoctor from './registerAsDoctor/registerAsDoctor.component';
import RegisterAsHospital from './registerAsHospital/registerAsHospital.component';
import RegisterAsPharmacy from './registerAsPharmacy/registerAsPharmacy.component';
import RegisterAsPathology from './registerAsPathology/rtegisterAsPathology.component';

const Registration = ({ match }) => {
    return (
        <div className="registrationContainer">
            <Header />
            {
                <Switch>
                    <Route exact path={`${match.url}/`} component={RegisterAs} />
                    <Route exact path={`${match.url}/registerAsDoctor`} component={RegisterAsDoctor} />
                    <Route exact path={`${match.url}/registerAsHospital`} component={RegisterAsHospital} />
                    <Route exact path={`${match.url}/registerAsPharmacy`} component={RegisterAsPharmacy} />
                    <Route exact path={`${match.url}/registerAsPathology`} component={RegisterAsPathology} />
                    <Redirect to='/404' />
                </Switch>
            }
            <Footer />
        </div>
    );
}

export default Registration;