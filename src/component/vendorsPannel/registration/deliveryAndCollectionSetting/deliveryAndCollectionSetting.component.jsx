import React, { useRef } from 'react';
import './deliveryAndCollectionSetting.styles.scss';
import { Slider, Typography } from '@material-ui/core';

//importing reusable components
import Icon from '../../../reusableComponent/icon/icon.component';

//importing icons
import { GiScooter } from 'react-icons/gi';

//own props=['collectionSetting','deliverySetting']
const DeliveryAndCollectionSetting = (props) => {
    const Type = useRef(props.type === 'deliverySetting' ? 'Delivery' : 'Collection');
    return (
        <div className="deliveryAndCollectionSetting">
            <div className="deliveryAndCollectionSettingLabelContainer">
                <div className="deliveryAndCollectionSettingIconContainer">
                    <Icon iconColor='white' iconSize='20px'>
                        <GiScooter />
                    </Icon>
                </div>
                <div className="deliveryAndCollectionSettingLabel">
                    {Type.current} Setting
                </div>
            </div>
            <form className='deliveryAndCollectionSettingForm' id={`${Type.current}Setting`}>
                <div className="radioInputContainer">
                    <div className="radioInputLabel">
                        <p>{Type.current} Available At</p>
                    </div>
                    <div className="radioInput">
                        <input type='radio' value='customerAddress' name='availableAt' />
                        <label htmlFor="available at customer Address">Customer Address</label>
                    </div>
                    <div className="radioInput">
                        <input type='radio' value='pickUpByCustomer' name='availableAt' />
                        <label htmlFor="pick up by customer">Pick Up By Customer</label>
                    </div>
                </div>
                <div className="deliveryAndCollectionInputContainer">
                    <div className="deliveryAndCollectionInput">
                        <label htmlFor="charges per order">{Type.current} Charges Per Order</label>
                        <input type='number' placeholder={`${Type.current} charges per order`} />
                    </div>
                    <div className="deliveryAndCollectionInput">
                        <label htmlFor="charges per order">Minimum {Type.current} ammount</label>
                        <input type='number' placeholder={`Minimum ${Type.current} ammount`} />
                    </div>
                    {
                        props.type === 'deliverySetting'
                            ? <div className="deliveryAndCollectionInput">
                                <label htmlFor="charges per order">Hardcopy report delivery charges</label>
                                <input type='number' placeholder={`Hardcopy report delivery charges`} />
                            </div>
                            : null
                    }
                </div>
                <div className="radioInputContainer">
                    <div className="radioInputLabel">
                        <p>Cash On Delivery Available</p>
                    </div>
                    <div className="radioInput">
                        <input type='radio' value='yes' name='cod' />
                        <label htmlFor="available at customer Address">Yes</label>
                    </div>
                    <div className="radioInput">
                        <input type='radio' value='no' name='cod' />
                        <label htmlFor="pick up by customer">No</label>
                    </div>
                </div>
                <div className='deliveryDistance'>
                    <Typography className='deliveryDistanceLabel' gutterBottom>
                        {Type.current} Distance (km)
                        </Typography>
                    <Slider
                        defaultValue={80}
                        //getAriaValueText='amk'
                        aria-labelledby="range-slider"
                        //step={10}
                        //marks='100'
                        aria-label='amk'
                        valueLabelDisplay="on"
                        className='slider'
                    />

                </div>

                <div className="deliveryAndCollectionButtonContainer">
                    <button className='whiteButton'>Back</button>
                    <button className='greenButton'>Save</button>
                </div>
            </form>
        </div>
    );
}

export default DeliveryAndCollectionSetting;