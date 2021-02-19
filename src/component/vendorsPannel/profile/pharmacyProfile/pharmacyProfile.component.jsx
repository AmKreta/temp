import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './pharmacyProfile.styles.scss';

//importing custom components
import Home from './home/home.component';
//import Orders from './orders/orders.component';
import Setting from './setting/setting.component';
import Promotions from './promotions/promotions.component';
import OrdersAndCollections from '../ordersAndCollections/ordersAndCollections.component';

const PharmacyProfile = ({ match }) => {
    return (
        <div className="pharmacyProfile">
            <Switch>
                <Route exact path={`${match.url}/`} render={({ match }) => <Redirect to={`${match.url}/home`} />} />
                <Route path={`${match.url}/home`} component={Home} />
                <Route path={`${match.url}/orders`} component={OrdersAndCollections} />
                <Route path={`${match.url}/setting`} component={Setting} />
                <Route path={`${match.url}/promotions`} component={Promotions} />
                <Redirect to='/404' />
            </Switch>
        </div>
    );
}

export default withRouter(PharmacyProfile);