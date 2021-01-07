import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AllowAccessPage from './allowAccessPage/allowAccessPage.component';
import LocationAccess from './locationAccess/locationAccess.component';
/*
    allow access page is the page which open up to link /allowAccess
    locationAccess is the page which open up to link /allowAccess/locationAccess
*/

const AllowAccess = ({ match }) => {
    return (
        <Switch>
            <Route exact path={`${match.url}/`} component={AllowAccessPage} />
            <Route path={`${match.url}/LocationAccess`} component={LocationAccess} />
            <Redirect to='/404' />
        </Switch>
    );
}

export default AllowAccess;
