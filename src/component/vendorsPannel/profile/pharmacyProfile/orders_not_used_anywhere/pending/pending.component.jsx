import React, { useState } from 'react';
import './pending.styles.scss';

//importing custom components
import CustomerDetails from '../customerDetails/customerDetails.component';
import OrderDetails from '../orderDetails/orderDetails.component';
import TotalCostDetails from '../totalCostDetails/totalCostDetails.component';
import AcceptTab from './acceptTab/acceptTab.component';
import DeclineTab from '../declineTab/declineTab.component';

const height = window.screen.height - (window.screen.height / 100) * 20;

const Pending = ({ setActiveTabNull, orderNo, orderDate, orderTime, paymentMethod, status, totalItems, cost }) => {
    const [showAcceptTab, setShowAcceptTab] = useState(false);
    const [showDeclineTab, setShowDeclineTab] = useState(false);

    return (
        <div className="pendingOrders" style={{ height: `${height}px` }}>
            <OrderDetails {...{ orderNo, orderDate, orderTime, paymentMethod, status }} />
            <hr />
            <div className='vendorPopupInvoice'>
                <img src='https://i1.wp.com/www.thegoldprojectblog.com/wp-content/uploads/2016/01/medical-bill-payment-tracker.png' alt='bill/invoice' />
            </div>
            <hr />
            <TotalCostDetails {...{ totalItems, cost }} />
            <hr />
            <CustomerDetails />
            <div className="vendorPopupButtons">
                <button className='whiteButton' onClick={(e) => setShowDeclineTab(true)}>Decline</button>
                <button className='greenButton' onClick={(e) => setShowAcceptTab(true)}>Accept</button>
            </div>
            {
                showAcceptTab
                    ? <AcceptTab {...{ setShowAcceptTab, setActiveTabNull }} />
                    : null
            }
            {
                showDeclineTab
                    ? <DeclineTab {...{ setShowDeclineTab, setActiveTabNull }} />
                    : null
            }
        </div>
    );
}

export default Pending;