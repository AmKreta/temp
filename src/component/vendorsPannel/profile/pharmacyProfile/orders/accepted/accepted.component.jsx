import React from 'react';
import './accepted.styles.scss';

//importing custom components
import CustomerDetails from '../customerDetails/customerDetails.component';
import OrderDetails from '../orderDetails/orderDetails.component';
import TotalCostDetails from '../totalCostDetails/totalCostDetails.component';

const height = window.screen.height - (window.screen.height / 100) * 20;

const Accepted = ({ setActiveTabNull, orderNo, orderDate, orderTime, paymentMethod, status, totalItems, cost }) => {
    return (
        <div className="acceptedOrders" onClick={setActiveTabNull} style={{ height: `${height}px` }}>
            <OrderDetails {...{ orderNo, orderDate, orderTime, paymentMethod, status }} />
            <hr />
            <TotalCostDetails {...{ totalItems, cost }} />
            <hr />
            <CustomerDetails />
        </div>
    );
}

export default Accepted;