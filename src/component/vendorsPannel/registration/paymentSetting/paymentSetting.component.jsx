import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './paymentSetting.styles.scss';
import Radio from '@material-ui/core/Radio';

import { VALIDATE } from './validator/validator';

//importing actions
import {
    setOnlinePayment,
    setPaymentOption,
    setUpiID,
    setBankIFSC,
    setBankAccountNumber,
    setCurrentVendor
} from '../../../../actions/action';

//reusable component
import Icon from '../../../reusableComponent/icon/icon.component';

//importing icon
import { BiWallet } from 'react-icons/bi';

//importing services
import { UPDATE_REGISTERED_USER, GET_USER_DEETAIL_BY_TOKEN } from '../../../../services/services';

const PaymentSetting = (props) => {

    const [reEnteredAccountNumber, setReEnteredAccountNumber] = useState('');
    const [errorsField, setErrorsField] = useState('');

    const back = (e) => {
        e.preventDefault();
        props.history.goBack();
    }

    const save = (e) => {
        e.preventDefault();

        let data = {
            payment: {
                onlinePayment: props.onlinePayment,
                type: props.paymentOption.upi ? 'upi' : 'bank',
                upiId: props.upiID,
                bankInfo: {
                    ifsc: props.IFSC,
                    accNum: props.accountNumber
                }
            }
        }

        let errors = VALIDATE({ ...data.payment, reEnteredAccountNumber });

        if ((Object.keys(errors).length === 0) || (data.payment.type === 'upi' && !Object.keys(errors).includes('upiId'))) {
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
                            nextUrl.pop();
                            nextUrl.shift();
                            nextUrl = '/' + nextUrl.join('/');
                            props.history.push(nextUrl);
                        })
                        .catch(err => {
                            alert('something went wrong');
                            console.log(err);
                        });
                })
                .catch(err => {
                    alert('something went wrong');
                    console.log(err);
                });
        }
        else {
            setErrorsField(errors);
            console.log(errors);
        }
    }

    return (
        <div className="paymentSettingContainer">
            <div className="skipButton">
                <button className='whiteButton'>Skip For Now</button>
            </div>
            <div className="paymentSettingLabel">
                <div className='labelIconContainer'>
                    <Icon iconColor='white' size='20px'>
                        <BiWallet />
                    </Icon>
                </div>
                <div className='labelIconLabel'>
                    <p>Payment Setting</p>
                </div>
            </div>
            <form id='paymentSettingForm'>
                <div className='onLinePayment radioInputLabelContainer'>
                    <div className='onLinePaymentLabel radioInputLabelLabel'>
                        <p>Online Payment Available</p>
                    </div>
                    <div className='onLinePaymentOptions  radioInputLabelOptions'>
                        <div className='radioInputLabel'>
                            <Radio
                                checked={props.onlinePayment ? true : false}
                                value='yes' name='onlinePayment'
                                onChange={(e) => props.setOnlinePayment(true)}
                            />
                            <label htmlFor="online payment yes">Yes</label>
                        </div>
                        <div className='radioInputLabel'>
                            <Radio
                                checked={props.onlinePayment ? false : true}
                                value='no' name='onlinePayment'
                                onChange={(e) => props.setOnlinePayment(false)}
                            />
                            <label htmlFor="online payment no">No</label>
                        </div>
                    </div>
                </div>
                <div className='paymentType radioInputLabelContainer'>
                    <div className='paymentTypeLabel radioInputLabelLabel'>
                        <p> Receive Payment By</p>
                    </div>
                    <div className='paymentTypeOptions  radioInputLabelOptions'>
                        <div className='radioInputLabel'>
                            <Radio
                                value='Upi'
                                checked={props.paymentOption.upi ? true : false}
                                name='paymentMode'
                                onChange={(e) => props.setPaymentOption({ upi: true, bankTransfer: false })}
                            />
                            <label htmlFor="payment mode upi">Upi</label>
                        </div>
                        <div className='radioInputLabel'>
                            <Radio
                                value='bank Transfer'
                                checked={props.paymentOption.bankTransfer ? true : false}
                                name='paymentMode'
                                onChange={(e) => props.setPaymentOption({ upi: false, bankTransfer: true })}
                            />
                            <label htmlFor="payment mode bank transfer">Bank Transfer</label>
                        </div>
                    </div>
                </div>
                <div className='inputInfoContainer'>
                    {
                        props.paymentOption.upi
                            ? <div className='upiInpt inputInfo'>
                                <label htmlFor="upi ID">Upi ID</label>
                                <input
                                    type='text'
                                    placeholder='Upi ID'
                                    value={props.upiID}
                                    onChange={(e) => props.setUpiID(e.target.value)}
                                    className={`${props.paymentOption.upi && errorsField.upiId ? 'erroredInput' : null}`}
                                />
                            </div>
                            : null
                    }
                    {
                        props.paymentOption.bankTransfer
                            ? <div className='bankDetailsInput'>
                                <div className='inputInfo'>
                                    <label htmlFor="IFSC Code">Bank IFSC Code</label>
                                    <input
                                        type='text'
                                        placeholder='Bank IFSC Code'
                                        value={props.IFSC}
                                        onChange={(e) => props.setBankIFSC(e.target.value)}
                                        className={`${props.paymentOption.bankTransfer && errorsField.ifsc ? 'erroredInput' : null}`}
                                    />
                                </div>
                                <div className='inputInfo'>
                                    <label htmlFor="Account Number">Bank Account Number</label>
                                    <input
                                        type='number'
                                        placeholder='Bank Account Number'
                                        value={props.accountNo}
                                        onChange={(e) => props.setBankAccountNumber(e.target.value)}
                                        className={`${props.paymentOption.bankTransfer && errorsField.accountNumber ? 'erroredInput' : null}`}
                                    />
                                </div>
                                <div className='inputInfo'>
                                    <label htmlFor="Re Enter Account Number">Re-enter Account Number</label>
                                    <input
                                        type='number'
                                        placeholder='Re-enter Account Number'
                                        value={reEnteredAccountNumber}
                                        onChange={(e) => setReEnteredAccountNumber(e.target.value)}
                                        className={`${props.paymentOption.bankTransfer && errorsField.reEnteredAccountNumber ? 'erroredInput' : null}`}
                                    />
                                </div>
                            </div>
                            : null
                    }
                </div>
                <div className="paymentSettingButton">
                    <button className='whiteButton' onClick={back}>Back</button>
                    <button className='greenButton' onClick={save} >Save</button>
                </div>
            </form>
        </div>
    );
}

const mapStatetoProps = state => ({
    onlinePayment: state.paymentDetails.onlinePaymentAvailable,
    paymentOption: state.paymentDetails.mode,
    upiID: state.paymentDetails.upiID,
    IFSC: state.paymentDetails.IFSC,
    accountNumber: state.paymentDetails.accountNumber,
    currentVendor: state.currentVendor,
    auth_token: state.token
});

const mapDispatchToProps = dispatch => ({
    setPaymentOption: ({ upi = false, bankTransfer = false }) => dispatch(setPaymentOption({ upi, bankTransfer })),
    setOnlinePayment: (option) => dispatch(setOnlinePayment(option)),
    setUpiID: (upi) => dispatch(setUpiID(upi)),
    setBankIFSC: (ifsc) => dispatch(setBankIFSC(ifsc)),
    setBankAccountNumber: (accountNo) => dispatch(setBankAccountNumber(accountNo)),
    setCurrentVendor: (payload) => dispatch(setCurrentVendor(payload))
});

export default connect(mapStatetoProps, mapDispatchToProps)(withRouter(PaymentSetting));