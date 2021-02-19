import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './pending.styles.scss';

//importing custom components
import CustomerDetails from '../customerDetails/customerDetails.component';
import OrderDetails from '../orderDetails/orderDetails.component';
import TotalCostDetails from '../totalCostDetails/totalCostDetails.component';
import AcceptTabDelivery from './acceptTabDelivery/acceptTabDelivery.component';
import AcceptTabCollection from './acceptTabCollection/acceptTabCollection.component';
import DeclineTab from '../declineTab/declineTab.component';

const height = window.innerHeight - (window.innerHeight / 100) * 20;

const Pending = ({ setActiveTabNull, orderNo, orderDate, orderTime, paymentMethod, status, totalItems, cost }) => {
    const [showAcceptTab, setShowAcceptTab] = useState(false);
    const [showDeclineTab, setShowDeclineTab] = useState(false);
    const businessType = useSelector(state => state.currentVendor.businessType);

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
                showAcceptTab && businessType === 'pharmacy'
                    ? <AcceptTabDelivery {...{ setShowAcceptTab, setActiveTabNull }} />
                    : null
            }
            {
                showAcceptTab && businessType === 'pathology'
                    ? <AcceptTabCollection {...{ setShowAcceptTab, setActiveTabNull }} />
                    : null
            }
            {
                showDeclineTab
                    ? <DeclineTab {...{ setShowDeclineTab, setActiveTabNull, orderNo, cost }} />
                    : null
            }
        </div>
    );
}

export default Pending;