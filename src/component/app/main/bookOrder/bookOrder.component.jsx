import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './bookOrder.styles.scss';

//custom components
import BookOrderHome from './bookOrderHome/bookOrderHome.component';
import ConfirmDetails from './confirmDetails/confirmDetails.component';
import ConfirmOrder from './confirmOrder/confirmOrder.component';

const BookOrder = ({ match }) => {
    return (
        <div className="bookOrder">
            <Switch>
                <Route exact path={`${match.url}/`} component={BookOrderHome} />
                <Route path={`${match.url}/confirmDetails`} component={ConfirmDetails} />
                <Route path={`${match.url}/confirmOrder`} component={ConfirmOrder} />
                <Redirect to='/404' />
            </Switch>
        </div>
    );
}

export default BookOrder; 