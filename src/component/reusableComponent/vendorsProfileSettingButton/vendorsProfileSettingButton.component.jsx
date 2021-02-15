import React from 'react';
import './vendorsProfileSettginButton.styles.scss';

//importgin icons
import { FaArrowCircleRight } from 'react-icons/fa';

//importing reusable cmponent
import Icon from '../icon/icon.component';

const VendorsProfileSettingButton = ({ icon, label1, label2, onClick = () => { } }) => {
    return (
        <div className="vendorsProfileSettingButton" onClick={onClick}>
            <div className='vendorProfileSettingIconContainer'>
                <Icon iconColor='white' size='28px'>
                    {icon}
                </Icon>
            </div>
            <div className='vendorsProfileSettingButtonLabel'>
                <div>
                    <p>{label1}</p>
                    <Icon>
                        <FaArrowCircleRight />
                    </Icon>
                </div>
                <div>
                    <p>{label2}</p>
                </div>
            </div>
        </div>
    );
}

export default VendorsProfileSettingButton;