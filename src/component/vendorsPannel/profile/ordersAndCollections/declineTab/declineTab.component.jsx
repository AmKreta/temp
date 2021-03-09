import React, { useState } from 'react';
import './declineTab.styles.scss';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

//importing custom components
import CustomerDetails from '../customerDetails/customerDetails.component';

//importing reusable components
import Icon from '../../../../reusableComponent/icon/icon.component';

//importing icons
import { BiRupee } from 'react-icons/bi';

const height = window.innerHeight - (window.innerHeight / 100) * 20;

const DeclineTab = ({ setShowDeclineTab, setActiveTabNull, orderNo, cost }) => {
    const [value, setValue] = React.useState('Order items are not available');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="vendorPopupPendingDeclineTabContainer" style={{ '--height': `${height}px` }}>
            <div className="vendorPopupPendingDeclineTab">
                <div className="vendorPopupDeleteOrderConfirmation">
                    <p>Are you sure you want to Decline/Delete </p>
                    <p>Order No. {orderNo}</p>
                </div>
                <hr />
                <CustomerDetails small />
                <div className='vendorPopupGrandTotalCost'>
                    <div>
                        <p>Grand Total</p>
                    </div>
                    <div>
                        <div>
                            <Icon>
                                <BiRupee />
                            </Icon>
                        </div>
                        <div>
                            <p>{cost}</p>
                        </div>
                    </div>
                </div>
                <div className="vendorPopupOrderDeclineReason">
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel
                                value="Order items are not available"
                                control={<Radio />}
                                label="Order items are not available"
                            />
                            <FormControlLabel
                                value="Delivery address is too far"
                                control={<Radio />}
                                label="Delivery address is too far"
                            />
                            <FormControlLabel
                                value="Delivery person is not Responsive"
                                control={<Radio />}
                                label="Delivery person is not Responsive"
                            />
                            <FormControlLabel
                                value="Others"
                                control={<Radio />}
                                label="Others"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="vendorPopupOrderDeclineActions">
                    <button
                        className='whiteButton'
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowDeclineTab(false);
                        }}
                    >
                        Back
                    </button>
                    <button
                        className='redButton'
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowDeclineTab(false);
                            setActiveTabNull();//go back to orders page
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeclineTab;