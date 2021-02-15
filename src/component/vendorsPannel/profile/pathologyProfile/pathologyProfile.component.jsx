import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './pathologyProfile.styles.scss';

//importing custom components
import Home from './home/home.component';
import Collection from './collection/collection.component';
import Setting from './setting/setting.component';
import Promotions from './promotions/promotions.component';

const PathologyProfile = ({ match }) => {
    return (
        <div className="pathologyProfile">
            <Switch>
                <Route exact path={`${match.url}/`} render={({ match }) => <Redirect to={`${match.url}/home`} />} />
                <Route path={`${match.url}/home`} component={Home} />
                <Route path={`${match.url}/collection`} component={Collection} />
                <Route path={`${match.url}/setting`} component={Setting} />
                <Route path={`${match.url}/promotions`} component={Promotions} />
                <Redirect to='/404' />
            </Switch>
        </div>
    );
}

export default withRouter(PathologyProfile);