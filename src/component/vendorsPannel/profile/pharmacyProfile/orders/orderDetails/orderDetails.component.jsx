import React from 'react';
import './orderDetails.styles.scss';

const OrderDetails = ({ orderNo, orderDate, orderTime, paymentMethod, status }) => {
    return (
        <div className="vendorOrderDetail">
            <div className="vendorPopupOrderNo">
                Order No. {orderNo}
            </div>
            <div className="vendorPopupOrderDate">
                {orderDate}
            </div>
            <div className="vendorPopupOrderTime">
                {orderTime}
            </div>
            <div className="vendotPopupPaymentMethod">
                {paymentMethod}
            </div>
            <div className={`vendorPopupStatus ${status}`}>
                {status}
            </div>
        </div>
    );
}

export default OrderDetails;