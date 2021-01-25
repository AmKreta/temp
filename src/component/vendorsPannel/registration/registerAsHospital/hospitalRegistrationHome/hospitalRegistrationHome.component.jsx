import React from 'react';
import './hospitalRegistrationHome.styles.scss';

//importing reusable components
import RegistrationFormButton from '../../../../reusableComponent/registrationFormButton/registrationFormButton.component';

//importing icons
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { BiWallet } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { GoPlus } from 'react-icons/go';
import logo from './logo.svg';

//importing routes
import { PAYMENT_SETTING, ADD_DOCTORS, ADD_STAFF } from '../../routes';

const HospitalRegistrationHome = ({ history, match }) => {
    return (
        <div className="hospitalRegistrationHome">
            <div className="businessInformation">
                <h4>Information about your business</h4>
                <RegistrationFormButton
                    icon1={<AiOutlineClockCircle />}
                    label={[<p>Add Pannel & Timing</p>]}
                    icon2={<GoPlus />}
                    onClick={(e) => { history.push(`${match.url}/${ADD_DOCTORS}`) }}
                    translucent
                />
                <RegistrationFormButton
                    icon1={<BiWallet />}
                    label={[<p>Payment Setting</p>]}
                    icon2={<GoPlus />}
                    onClick={(e) => { history.push(`${match.url}/${PAYMENT_SETTING}`) }}
                    translucent
                />
                <RegistrationFormButton
                    icon1={<BsFillPeopleFill />}
                    label={[<p>Add Support Staff</p>]}
                    icon2={<GoPlus />}
                    onClick={(e) => { history.push(`${match.url}/${ADD_STAFF}`) }}
                    translucent
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

export default HospitalRegistrationHome;