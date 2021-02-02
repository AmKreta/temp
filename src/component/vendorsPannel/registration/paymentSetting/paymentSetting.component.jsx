import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './paymentSetting.styles.scss';

//importing actions
import {
    setOnlinePayment,
    setPaymentOption,
    setUpiID,
    setBankIFSC,
    setBankAccountNumber
} from '../../../../actions/action';

//reusable component
import Icon from '../../../reusableComponent/icon/icon.component';

//importing icon
import { BiWallet } from 'react-icons/bi';

//importing services
import {
    REGISTER_AS_DOCTOR_LINK,
    REGISTER_AS_HOSPITAL_LINK,
    REGISTER_AS_PHARMACY_LINK,
    REGISTER_AS_PATHOLOGY_LINK
} from '../../../../services/services';

const PaymentSetting = (props) => {

    const back = (e) => {
        e.preventDefault();
        props.history.goBack();
    }

    const save = (e) => {
        e.preventDefault();

        let url;
        if (props.currentVendor.businessType === 'doctor') {
            url = REGISTER_AS_DOCTOR_LINK;
        }
        else if (props.currentVendor.businessType === 'hospital') {
            url = REGISTER_AS_HOSPITAL_LINK;
        }
        else if (props.currentVendor.businessType === 'pharmacy') {
            url = REGISTER_AS_PHARMACY_LINK;
        }
        else if (props.currentVendor.businessType === 'pathology') {
            url = REGISTER_AS_PATHOLOGY_LINK;
        }

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
        console.log(data);
        axios
            .put(`${url}/${props.currentVendor._id}`, data)
            .then(res => {
                let nextUrl = props.match.url.split('/');
                nextUrl.pop();
                nextUrl.shift();
                nextUrl = '/' + nextUrl.join('/');
                props.history.push(nextUrl);
            })
            .catch(err => {
                alert('something went wrong');
            });
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
                    <p>PaymentSetting</p>
                </div>
            </div>
            <form id='paymentSettingForm'>
                <div className='onLinePayment radioInputLabelContainer'>
                    <div className='onLinePaymentLabel radioInputLabelLabel'>
                        <p>Online Payment Available</p>
                    </div>
                    <div className='onLinePaymentOptions  radioInputLabelOptions'>
                        <div className='radioInputLabel'>
                            <input type='radio'
                                checked={props.onlinePayment ? true : false}
                                value='yes' name='onlinePayment'
                                onChange={(e) => props.setOnlinePayment(true)}
                            />
                            <label htmlFor="online payment yes">Yes</label>
                        </div>
                        <div className='radioInputLabel'>
                            <input
                                type='radio'
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
                            <input
                                type='radio'
                                value='Upi'
                                checked={props.paymentOption.upi ? true : false}
                                name='paymentMode'
                                onChange={(e) => props.setPaymentOption({ upi: true, bankTransfer: false })}
                            />
                            <label htmlFor="payment mode upi">Upi</label>
                        </div>
                        <div className='radioInputLabel'>
                            <input
                                type='radio'
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
                                    />
                                </div>
                                <div className='inputInfo'>
                                    <label htmlFor="Account Number">Bank Account Number</label>
                                    <input
                                        type='number'
                                        placeholder='Bank Account Number'
                                        value={props.accountNo}
                                        onChange={(e) => props.setBankAccountNumber(e.target.value)}
                                    />
                                </div>
                                <div className='inputInfo'>
                                    <label htmlFor="Re Enter Account Number">Re-enter Account Number</label>
                                    <input type='text' placeholder='Re-enter Account Number' />
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
    currentVendor: state.currentVendor
});

const mapDispatchToProps = dispatch => ({
    setPaymentOption: ({ upi = false, bankTransfer = false }) => dispatch(setPaymentOption({ upi, bankTransfer })),
    setOnlinePayment: (option) => dispatch(setOnlinePayment(option)),
    setUpiID: (upi) => dispatch(setUpiID(upi)),
    setBankIFSC: (ifsc) => dispatch(setBankIFSC(ifsc)),
    setBankAccountNumber: (accountNo) => dispatch(setBankAccountNumber(accountNo))
});

export default connect(mapStatetoProps, mapDispatchToProps)(PaymentSetting);