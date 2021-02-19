import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './accepted.styles.scss';

//importing custom components
import CustomerDetails from '../customerDetails/customerDetails.component';
import OrderDetails from '../orderDetails/orderDetails.component';
import TotalCostDetails from '../totalCostDetails/totalCostDetails.component';
import DeclineTab from '../declineTab/declineTab.component';
import Delivery from './delivery/delivery.component';
import Collection from './collection/collection.component';

const height = window.innerHeight - (window.innerHeight / 100) * 20;

const data = [
    { name: 'multi vitamin', pack: 10, mrp: 30, total: 300 },
    { name: 'multi vitamin', pack: 10, mrp: 30, total: 300 },
    { name: 'multi vitamin', pack: 10, mrp: 30, total: 300 },
    { name: 'multi vitamin', pack: 10, mrp: 30, total: 300 },
    { name: 'multi vitamin', pack: 10, mrp: 30, total: 300 }
]

const Accepted = ({ setActiveTabNull, orderNo, orderDate, orderTime, paymentMethod, status, totalItems, cost }) => {
    const [showDeliverCollectionTab, setShowDeliverCollectionTab] = useState(false);
    const [showDeclineTab, setShowDeclineTab] = useState(false);
    const businessType = useSelector(state => state.currentVendor.businessType);

    return (
        <div className="acceptedOrders" style={{ height: `${height}px` }}>
            <OrderDetails {...{ orderNo, orderDate, orderTime, paymentMethod, status }} />
            <hr />
            <div className="vendorPopupItemList">
                <div className="vendorPopupItemListHeaders">
                    <div>Name</div>
                    <div>Pack</div>
                    <div>MRP</div>
                    <div>Total</div>
                </div>
                {
                    data.map((item, index) => (
                        <div className="vendorPopupItemListItem" key={index}>
                            <div>{item.name}</div>
                            <div>{item.pack}</div>
                            <div>{item.mrp}</div>
                            <div>{item.total}</div>
                        </div>
                    ))
                }
            </div>
            <hr />
            <TotalCostDetails {...{ totalItems, cost }} />
            <hr />
            <CustomerDetails />
            <div className="vendorPopupAcceptedActions">
                <button className='whiteButton' onClick={(e) => setShowDeclineTab(true)}>Decline</button>
                <button className='greenButton' onClick={(e) => setShowDeliverCollectionTab(true)}>
                    {businessType === 'pharmacy' ? 'Deliver Now' : null}
                    {businessType === 'pathology' ? 'Collect Now' : null}
                </button>
            </div>
            {
                showDeclineTab
                    ? <DeclineTab {...{ setShowDeclineTab, setActiveTabNull, orderNo, cost }} />
                    : null
            }
            {
                showDeliverCollectionTab && businessType === 'pharmacy'
                    ? <Delivery {...{ setShowDeliverCollectionTab, setActiveTabNull }} />
                    : null
            }
            {
                showDeliverCollectionTab && businessType === 'pathology'
                    ? <Collection {...{ setShowDeliverCollectionTab, setActiveTabNull }} />
                    : null
            }
        </div>
    );
}

export default Accepted;