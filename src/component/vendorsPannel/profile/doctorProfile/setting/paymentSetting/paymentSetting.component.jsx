import React from 'react';
import './paymentSetting.styles.scss';

//importing custom component from registration
import Payment_Setting from '../../../../registration/paymentSetting/paymentSetting.component';

const PaymentSetting = () => {
    return (
        <div className="vendorsPaymentSetting">
            <Payment_Setting />
        </div>
    );
}

export default PaymentSetting;