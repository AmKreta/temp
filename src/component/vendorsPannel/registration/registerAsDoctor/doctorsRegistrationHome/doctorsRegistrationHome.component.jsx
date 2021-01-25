import React from 'react';
import './doctorsRegistrationHome.styles.scss';

//routes names
import { ADD_HOSPITALS, PAYMENT_SETTING } from '../../routes';

//importing icons
import Doctin from '../../../../../assets/images/doctInApiLogo.webp';
import { FaCapsules } from 'react-icons/fa';
import { BiWallet } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { GoPlus } from 'react-icons/go';

//reusable component
import RegistrationFormButton from '../../../../reusableComponent/registrationFormButton/registrationFormButton.component';


const DoctorsRegistrationHome = ({ history, match }) => {
    return (
        <div className="doctorsRegistrationHome">
            <div className="businessInformation">
                <h4>Information about your business</h4>
                <RegistrationFormButton
                    icon1={<FaCapsules />}
                    label={[<p>Add Hospital & Timing</p>]}
                    icon2={<GoPlus />}
                    onClick={(e) => history.push(`${match.url}/${ADD_HOSPITALS}`)}
                    translucent
                />
                <RegistrationFormButton
                    icon1={<BiWallet />}
                    label={[<p>Payment Setting</p>]}
                    icon2={<GoPlus />}
                    onClick={(e) => history.push(`${match.url}/${PAYMENT_SETTING}`)}
                    translucent
                />
            </div>
            <RegistrationFormButton
                img={Doctin}
                label={[
                    <p>Or verify Your <strong>Doctin</strong> user ID</p>,
                    <p>And we will fetch all details</p>
                ]}
            />
            <RegistrationFormButton
                icon1={<IoLogoWhatsapp />}
                label={[<p>if you are facing problem chat with us</p>]}
                iconSize='2.5em'
            />
        </div>
    );
}

export default DoctorsRegistrationHome;