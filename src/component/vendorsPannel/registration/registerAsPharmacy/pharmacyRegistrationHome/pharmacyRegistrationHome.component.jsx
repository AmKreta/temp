import React from 'react';
import './pharmacyRegistrationHome.styles.scss';

//importing icons
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { BiWallet } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { GoPlus } from 'react-icons/go';

//importing reusable components
import RegistrationFormButton from '../../../../reusableComponent/registrationFormButton/registrationFormButton.component';

//importing routes
import { ADD_TIMINGS, DELIVERY_SETTING, ADD_PRODUCTS } from '../../routes';

const PharmacyRegistrationHome = ({ history, match }) => {
    return (
        <div className="pharmacyRegistrationHome">
            <div>
                <h4>information about your business</h4>
                <RegistrationFormButton
                    icon1={<AiOutlineClockCircle />}
                    label={[<p>Add Timing And Staff</p>]}
                    icon2={<GoPlus />}
                    translucent
                    onClick={(e) => history.push(`${match.url}/${ADD_TIMINGS}`)}
                />
                <RegistrationFormButton
                    icon1={<BsFillPeopleFill />}
                    label={[<p>Dilevery & Payment Setting</p>]}
                    icon2={<GoPlus />}
                    translucent
                    onClick={(e) => history.push(`${match.url}/${DELIVERY_SETTING}`)}
                />
                <RegistrationFormButton
                    icon1={<BiWallet />}
                    label={[<p>Add Or Import Products</p>]}
                    icon2={<GoPlus />}
                    translucent
                    onClick={(e) => history.push(`${match.url}/${ADD_PRODUCTS}`)}
                />
            </div>
            <div>
                <RegistrationFormButton
                    icon1={<IoLogoWhatsapp />}
                    label={[<p>If You Are facing Problems Chat With Us</p>]}
                    icon2={<GoPlus />}
                />
            </div>
        </div>
    );
}

export default PharmacyRegistrationHome;