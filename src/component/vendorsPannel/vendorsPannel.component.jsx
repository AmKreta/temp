import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './vendorsPannel.styles.scss';

//importing background imge 
import background from '../../assets/images/background.webp';

//custom component
import VendorsPannelHome from './vendorsPannelHome/vendorsPannelHome.component';
import Registration from './registration/registration.component';

const style = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center'
}

const VendorsPannel = ({ match }) => {
    return (
        <div className="vendorsPannel" style={style}>
            <Switch>
                <Route exact path={`${match.url}/`} component={VendorsPannelHome} />
                <Route path={`${match.url}/registration`} component={Registration} />
                <Redirect to='/404' />
            </Switch>
        </div>
    );
}

export default VendorsPannel;