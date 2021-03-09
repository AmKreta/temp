import React, { useState } from 'react';
import './shipped.styles.scss';

//importing custom components
import CustomerDetails from '../customerDetails/customerDetails.component';
import OrderDetails from '../orderDetails/orderDetails.component';
import TotalCostDetails from '../totalCostDetails/totalCostDetails.component';
import DeclineTab from '../declineTab/declineTab.component';
import Delivered from './delivered/delivered.component';

const height = window.innerHeight - (window.innerHeight / 100) * 20;

const Shipped = ({ setActiveTabNull, orderNo, orderDate, orderTime, paymentMethod, status, totalItems, cost }) => {
    const [showDeliverTab, setShowDeliverTab] = useState(false);
    const [showDeclineTab, setShowDeclineTab] = useState(false);
    return (
        <div className="shippedOrders" style={{ '--height': `${height}px` }}>
            <OrderDetails {...{ orderNo, orderDate, orderTime, paymentMethod, status }} />
            <hr />
            <div className='vendorPopupShippedInvoice'>
                <img src='https://i1.wp.com/www.thegoldprojectblog.com/wp-content/uploads/2016/01/medical-bill-payment-tracker.png' alt='bill/invoice' />
            </div>
            <hr />
            <TotalCostDetails {...{ totalItems, cost }} />
            <hr />
            <CustomerDetails />
            <div className="vendorPannelShippedActions">
                <button className='whiteButton' onClick={(e) => setShowDeclineTab(true)}>Decline</button>
                <button className='greenButton' onClick={(e) => setShowDeliverTab(true)}>Deliver</button>
            </div>
            {
                showDeliverTab
                    ? <Delivered {...{ setShowDeliverTab, setActiveTabNull, cost, orderNo }} />
                    : null
            }
            {
                showDeclineTab
                    ? <DeclineTab {...{ setShowDeclineTab, setActiveTabNull, cost, orderNo }} />
                    : null
            }
        </div>
    );
}

export default Shipped;