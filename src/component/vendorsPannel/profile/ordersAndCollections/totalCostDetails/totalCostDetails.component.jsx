import React from 'react';
import './totalCostDetails.styles.scss';

//importing icon
import { BiRupee } from 'react-icons/bi';

//importing reusable components
import Icon from '../../../../reusableComponent/icon/icon.component';

const TotalCostDetails = ({ totalItems, cost }) => {
    return (
        <div className="vendorTotalCostDetails">
            <div className="vendorPopupTotalItems">
                <div>Total Items:{totalItems}</div>
                <div>
                    <Icon>
                        <BiRupee />
                    </Icon>
                    <p>
                        {cost}.00
                    </p>
                </div>
            </div>
            <div className="vendorPopupDeliveryCharges">
                <div>Delivery Charges</div>
                <div>
                    <Icon>
                        <BiRupee />
                    </Icon>
                    <p>
                        40.00
                    </p>
                </div>
            </div>
            <div className="vendorPopupTotalCharges">
                <div>Grand Total</div>
                <div>
                    <Icon>
                        <BiRupee />
                    </Icon>
                    <p>
                        {cost + 40}.00
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TotalCostDetails;