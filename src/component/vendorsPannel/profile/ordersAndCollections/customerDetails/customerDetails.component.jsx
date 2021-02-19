import React, { useMemo } from 'react';
import './customerDetails.styles.scss';

//importing jss
import { green } from '../../../../../assets/globalJSS';

//importing icons
import { IoLogoWhatsapp } from 'react-icons/io';

//importing reusable components
import Icon from '../../../../reusableComponent/icon/icon.component';

const Customerdetails = ({ orderId, small }) => {
    const hidden = useMemo(() => ({ display: small ? 'none' : 'flex' }), [small]);
    return (
        <div className="orderCustomerDetails">
            <div className="vendorPopUpCustomerDetails" style={hidden}>
                <div>
                    <p>Customer Detail</p>
                </div>
                <div>
                    <p>Eat Delivery Timing: 23min</p>
                </div>
            </div>
            <div className={`vendorPopupNamePhoneChat ${small ? 'justifyFlexStart' : null}`}>
                <div className="vendorPopupCustomerName">
                    <p>Sunjoy Ghosh</p>
                </div>
                <div className="vendorPopupCustomerPhone">
                    <p>+919928735840</p>
                </div>
                <div className="vendorPopupCustomerChat" style={hidden}>
                    <Icon iconColor={green} size='25px'>
                        <IoLogoWhatsapp />
                    </Icon>
                </div>
            </div>
            <div className="vendorPopupCustomerAddress">
                <div className="vendorPopupCustomerHomeAddress">
                    <p>Lal Gate, Talwar Line , Quater no. 261/1, Dehradun</p>
                </div>
                <div className="vendorPopupCustomerPincode">
                    <p>Pincode: 248003</p>
                </div>
            </div>
        </div>
    );
}

export default Customerdetails;