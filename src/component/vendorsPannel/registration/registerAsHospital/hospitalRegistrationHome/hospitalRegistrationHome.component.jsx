import React from 'react';
import { connect } from 'react-redux';
import './hospitalRegistrationHome.styles.scss';

//importing reusable components
import RegistrationFormButton from '../../../../reusableComponent/registrationFormButton/registrationFormButton.component';

//importing icons
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { BiWallet } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { GoPlus } from 'react-icons/go';
import { MdCheckCircle } from 'react-icons/md';
import logo from './logo.svg';

//importing routes
import { PAYMENT_SETTING, ADD_DOCTORS, ADD_STAFF } from '../../routes';

const HospitalRegistrationHome = ({ history, match, currentVendor }) => {
    return (
        <div className="hospitalRegistrationHome">
            <div className="businessInformation">
                <h4>Information about your business</h4>
                <RegistrationFormButton
                    icon1={<AiOutlineClockCircle />}
                    label={[<p>Add Pannel & Timing</p>]}
                    icon2={
                        currentVendor.doctors && currentVendor.doctors.length ?
                            <MdCheckCircle /> :
                            <GoPlus />
                    }
                    onClick={(e) => { history.push(`${match.url}/${ADD_DOCTORS}`) }}
                    translucent={
                        currentVendor.doctors && currentVendor.doctors.length
                            ? false
                            : true
                    }
                />
                <RegistrationFormButton
                    icon1={<BiWallet />}
                    label={[<p>Payment Setting</p>]}
                    icon2={
                        currentVendor.payment
                            ? <MdCheckCircle />
                            : <GoPlus />
                    }
                    onClick={(e) => { history.push(`${match.url}/${PAYMENT_SETTING}`) }}
                    translucent={
                        currentVendor.payment
                            ? false
                            : true
                    }
                />
                <RegistrationFormButton
                    icon1={<BsFillPeopleFill />}
                    label={[<p>Add Support Staff</p>]}
                    icon2={
                        currentVendor.staffs.length
                            ? <MdCheckCircle />
                            : <GoPlus />
                    }
                    onClick={(e) => { history.push(`${match.url}/${ADD_STAFF}`) }}
                    translucent={
                        currentVendor.staffs.length
                            ? false
                            : true
                    }
                />
            </div>
            <RegistrationFormButton
                img={logo}
                alt='doctDesk'
                label={[
                    <p>Or Verify Your <strong>DoctDesk</strong> User ID</p>,
                    <p>And We Will Fetch All Details</p>
                ]}
            />
            <RegistrationFormButton
                icon1={<IoLogoWhatsapp />}
                label={[<p>If You Are Facing Problem Chat With Us</p>]}
                iconSize='2.5em'
            />
        </div>
    );
}

const mapStateToProps = state => ({
    currentVendor: state.currentVendor
});

export default connect(mapStateToProps)(HospitalRegistrationHome);