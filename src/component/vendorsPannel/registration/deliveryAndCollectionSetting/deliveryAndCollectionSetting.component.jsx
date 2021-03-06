import React, { useRef, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './deliveryAndCollectionSetting.styles.scss';
import { Slider, Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';

import { deliveryValidator, collectionValidator } from './validator/validator';

//importing actions
import {
    setDeliveryAndCollectionAvailableAt,
    setDeliveryAndCollectionChargesperOrder,
    setDeliveryAndCollectionCodAvailable,
    setDeliveryAndCollectionDistance,
    setDeliveryAndCollectionHardcopyDeliveryCharges,
    setDeliveryAndCollectionMininumAmmount,
    setCurrentVendor
} from '../../../../actions/action';

//importing reusable components
import Icon from '../../../reusableComponent/icon/icon.component';

//importing icons
import { GiScooter } from 'react-icons/gi';

//importing services
import { UPDATE_REGISTERED_USER, GET_USER_DEETAIL_BY_TOKEN } from '../../../../services/services';
import { Block } from '@material-ui/icons';

//own props=['collectionSetting','deliverySetting']
const DeliveryAndCollectionSetting = (props) => {

    const [errorsField, setErrorsField] = useState({});

    const save = (e) => {
        e.preventDefault();

        let data;

        if (props.currentVendor.businessType === 'pharmacy') {
            data = {
                deliveryDetails: {
                    type: props.availableAt.customerAddress ? 'delivery' : 'pickup',
                    deliveryCharges: props.chargesPerOrder,
                    minimumAmmount: props.minimumAmmount,
                    codAvailable: props.codAvailable,
                    deliveryDistance: props.distance
                }
            }
        }
        else if (props.currentVendor.businessType === 'pathology') {
            data = {
                collections: {
                    availablity: props.availableAt.customerAddress ? 'customer' : 'center',
                    collectionChargesPerVisit: props.chargesPerOrder,
                    minCollectionAmmount: props.minimumAmmount,
                    hardCopyReportDeliveryCharges: props.hardcopyDeliveryCharges,
                    codAvailable: props.codAvailable,
                    collectionDistance: props.distance
                }
            }
        }

        let error = props.currentVendor.businessType === 'pharmacy' ? deliveryValidator(data) : collectionValidator(data);

        if (Object.keys(error).length === 0) {
            axios
                .put(UPDATE_REGISTERED_USER, data, {
                    headers: {
                        'Authorization': `Bearer ${props.auth_token.accessToken}`
                    }
                })
                .then(res => {
                    axios
                        .get(GET_USER_DEETAIL_BY_TOKEN, {
                            headers: {
                                'Authorization': `Bearer ${props.auth_token.accessToken}`
                            }
                        })
                        .then(response => {
                            props.setCurrentVendor(response.data.payload);
                            let nextUrl = props.match.url.split('/');
                            //nextUrl=['','vendor','registerAs*','deliverySetting or collectionSetting',""]
                            nextUrl.pop();//removing last two element
                            nextUrl.pop();
                            nextUrl.shift();//removing first element
                            nextUrl.push('paymentSetting');
                            props.history.push('/' + nextUrl.join('/'));
                        })
                        .catch(err => {
                            console.log(err);
                            alert('something went wrong');
                        })
                })
                .catch(err => {
                    console.log(err);
                    alert('something went wrong');
                });
        }
        else {
            setErrorsField(error);
        }
    }

    const back = (e) => {
        e.preventDefault();
        props.history.goBack();
    }

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
                        <Radio
                            value='customerAddress'
                            name='availableAt'
                            checked={props.availableAt.customerAddress ? true : false}
                            onChange={
                                (e) => props.setDeliveryAndCollectionAvailableAt({
                                    customerAddress: true,
                                    pickUpByCustomer: false
                                })
                            }
                        />
                        <label htmlFor="available at customer Address">Customer Address</label>
                    </div>
                    <div className="radioInput">
                        <Radio
                            value='pickUpByCustomer'
                            name='availableAt'
                            checked={props.availableAt.pickUpByCustomer ? true : false}
                            onChange={
                                (e) => props.setDeliveryAndCollectionAvailableAt({
                                    customerAddress: false,
                                    pickUpByCustomer: true
                                })
                            }
                        />
                        <label htmlFor="pick up by customer">Pick Up By Customer</label>
                    </div>
                </div>
                <div className="deliveryAndCollectionInputContainer">
                    <div className="deliveryAndCollectionInput">
                        <label htmlFor="charges per order">{Type.current} Charges Per Order</label>
                        <input
                            type='number'
                            placeholder={`${Type.current} charges per order`}
                            value={props.chargesPerOrder}
                            onChange={(e) => props.setDeliveryAndCollectionChargesperOrder(e.target.value)}
                            className={`${errorsField.chargesPerOrder ? 'erroredInput' : null}`}
                        />
                    </div>
                    <div className="deliveryAndCollectionInput">
                        <label htmlFor="charges per order">Minimum {Type.current} ammount</label>
                        <input
                            type='number'
                            placeholder={`Minimum ${Type.current} ammount`}
                            value={props.minimumAmmount}
                            onChange={(e) => props.setDeliveryAndCollectionMininumAmmount(e.target.value)}
                            className={`${errorsField.minOrderAmmount ? 'erroredInput' : null}`}
                        />
                    </div>
                    {
                        props.type === 'deliverySetting'
                            ? <div className="deliveryAndCollectionInput">
                                <label htmlFor="charges per order">Hardcopy report delivery charges</label>
                                <input
                                    type='number'
                                    placeholder={`Hardcopy report delivery charges`}
                                    value={props.hardcopyDeliveryCharges}
                                    onChange={(e) => props.setDeliveryAndCollectionHardcopyDeliveryCharges(e.target.value)}
                                />
                            </div>
                            : null
                    }
                </div>
                <div className="radioInputContainer">
                    <div className="radioInputLabel">
                        <p>Cash On Delivery Available</p>
                    </div>
                    <div className="radioInput">
                        <Radio
                            value='yes'
                            name='cod'
                            checked={props.codAvailable ? true : false}
                            onChange={(e) => props.setDeliveryAndCollectionCodAvailable(true)}
                        />
                        <label htmlFor="available at customer Address">Yes</label>
                    </div>
                    <div className="radioInput">
                        <Radio
                            value='no'
                            name='cod'
                            checked={props.codAvailable ? false : true}
                            onChange={(e) => props.setDeliveryAndCollectionCodAvailable(false)}
                        />
                        <label htmlFor="pick up by customer">No</label>
                    </div>
                </div>
                <div className='deliveryDistance'>
                    <Typography className='deliveryDistanceLabel' gutterBottom>
                        {Type.current} Distance (km)
                        </Typography>
                    <Slider
                        defaultValue={0}
                        //getAriaValueText='amk'
                        aria-labelledby="range-slider"
                        //step={10}
                        //marks='100'
                        aria-label='amk'
                        valueLabelDisplay="on"
                        onChange={(e) => { props.setDeliveryAndCollectionDistance(e.target.innerText) }}
                        className='slider'
                    />
                    <p style={{
                        color: 'red',
                        fontSize: '.8em',
                        textAlign: 'left',
                        display: errorsField.distance ? 'block' : 'none'
                    }}>
                        distance is not set
                    </p>
                </div>

                <div className="deliveryAndCollectionButtonContainer">
                    <button className='whiteButton' onClick={back}>Back</button>
                    <button className='greenButton' onClick={save}>Save</button>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = state => ({
    availableAt: state.deliveryAndCollection.availableAt,
    chargesPerOrder: state.deliveryAndCollection.chargesPerOrder,
    minimumAmmount: state.deliveryAndCollection.minimumAmmount,
    hardcopyDeliveryCharges: state.deliveryAndCollection.hardcopyDeliveryCharges,
    codAvailable: state.deliveryAndCollection.codAvailable,
    distance: state.deliveryAndCollection.distance,
    currentVendor: state.currentVendor,
    auth_token: state.token
});

const mapDispatchToProps = dispatch => ({
    setDeliveryAndCollectionAvailableAt: ({ customerAddress, pickUpByCustomer }) => dispatch(setDeliveryAndCollectionAvailableAt({ customerAddress, pickUpByCustomer })),
    setDeliveryAndCollectionChargesperOrder: (chargesPerOrder) => dispatch(setDeliveryAndCollectionChargesperOrder(chargesPerOrder)),
    setDeliveryAndCollectionCodAvailable: (option) => dispatch(setDeliveryAndCollectionCodAvailable(option)),
    setDeliveryAndCollectionDistance: (distance) => dispatch(setDeliveryAndCollectionDistance(distance)),
    setDeliveryAndCollectionHardcopyDeliveryCharges: (hardcopyDeliveryCharges) => dispatch(setDeliveryAndCollectionHardcopyDeliveryCharges(hardcopyDeliveryCharges)),
    setDeliveryAndCollectionMininumAmmount: (minAmmount) => dispatch(setDeliveryAndCollectionMininumAmmount(minAmmount)),
    setCurrentVendor: (payload) => dispatch(setCurrentVendor(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DeliveryAndCollectionSetting));