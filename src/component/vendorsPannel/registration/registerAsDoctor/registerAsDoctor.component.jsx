import React from 'react';
import './registerAsDoctor.styles.scss';

//importing icons
import Doctin from '../../../../assets/images/doctInApiLogo.webp';
import { FaCapsules } from 'react-icons/fa';
import { BiWallet } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { GoPlus } from 'react-icons/go';

//importing reusable components
import Icon from '../../../reusableComponent/icon/icon.component';

const iconColor = 'white';
const iconSize = '2em';


const RegisterAsDoctor = () => {
    return (
        <div className="registerAsDoctor">
            <div className="businessInformation">
                <h4>Information about your business</h4>
                <div className="hospitalAndTiming flexContainer">
                    <div className='businessInformationIcon'>
                        <Icon iconColor={iconColor} size={iconSize}>
                            <FaCapsules />
                        </Icon>
                    </div>
                    <p>Add Hospital & Timing</p>
                    <Icon>
                        <GoPlus />
                    </Icon>
                </div>
                <div className="paymentSetting flexContainer">
                    <div className='businessInformationIcon'>
                        <Icon iconColor={iconColor} size={iconSize}>
                            <BiWallet />
                        </Icon>
                    </div>
                    <p>Payment Setting</p>
                    <Icon>
                        <GoPlus />
                    </Icon>
                </div>
            </div>
            <div className="doctin flexContainer">
                <div className='businessInformationIcon'>
                    <img src={Doctin} alt='doctin logo' />
                </div>
                <p>
                    <p>Or verify Your <strong>Doctin</strong> user ID</p>
                    <p>And we will fetch all details</p>
                </p>
            </div>
            <div className="chat flexContainer">
                <div className='businessInformationIcon'>
                    <Icon iconColor={iconColor} size={iconSize}>
                        <IoLogoWhatsapp />
                    </Icon>
                </div>
                <p>if you are facing problem chat with us</p>
            </div>
        </div>
    );
}

export default RegisterAsDoctor;