import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './delivery.styles.scss';
import { FormControl, InputLabel, Select, makeStyles, MenuItem } from '@material-ui/core';

//importing reusable components
import Icon from '../../../../../reusableComponent/icon/icon.component';

//importing icon
import { ImAttachment } from 'react-icons/im';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const height = window.innerHeight - (window.innerHeight / 100) * 20;

const Delivery = ({ setShowDeliverCollectionTab, setActiveTabNull }) => {
    const [deliveryBoy, setDeliveryBoy] = useState(null);
    const staff = useSelector(state => state.currentVendor.staffs);

    const handleChange = (event) => {
        setDeliveryBoy(event.target.value);
    };

    const classes = useStyles();

    return (
        <div className="vendorPopupAcceptedDeliveryContainer" style={{ height }}>
            <div className="vendorPopupAcceptedDelivery">
                <div className="vendorPopupAcceptedDeliveryHeader">
                    <p>You are done with packing and are ready to deliver</p>
                </div>
                <div className='vendorPopupAcceptedDeliveryBoyAssignment'>
                    <div>
                        <p>Assign collection agent</p>
                    </div>
                    <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-Deliver-label">Collecion Boy</InputLabel>
                            <Select
                                labelId="assign-delivery-boy"
                                id="assign-delivery-boy"
                                value={deliveryBoy}
                                onChange={handleChange}
                            >
                                {
                                    staff && staff.length && staff.map((item, index) => <MenuItem value={item.name} key={item._id}>{item.name}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="vendorPannelAcceptedAttachBill">
                    <div>
                        <p>Attach Bill</p>
                    </div>
                    <div>
                        <Icon iconColor="rgb(133,133,133)" size='20px'>
                            <ImAttachment />
                        </Icon>
                    </div>
                </div>
                <div className="vendorPannelAcceptedAttachBillImage">
                    <img src='https://i1.wp.com/www.thegoldprojectblog.com/wp-content/uploads/2016/01/medical-bill-payment-tracker.png' alt='bill' />
                </div>
                <div className="vendorPannelAcceptedTotalCost">
                    <div>
                        <p>Grand total:</p>
                    </div>
                    <div>
                        {300}
                    </div>
                </div>
                <div className="vendorPopupAcceptedDeliveryActions">
                    <button
                        className='whiteButton'
                        onClick={(e) => {
                            setShowDeliverCollectionTab(false);
                        }}
                    >
                        No
                    </button>
                    <button
                        className='greenButton'
                        onClick={(e) => {
                            setShowDeliverCollectionTab(false);
                            setActiveTabNull();//go back to orders page
                        }}
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Delivery;

