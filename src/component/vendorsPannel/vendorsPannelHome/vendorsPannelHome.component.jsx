import React from 'react';
import './vendorsPannelHome.styles.scss';

//reusableComponent
import Icon from '../../reusableComponent/icon/icon.component';

//importing icons
import { RiWhatsappFill } from 'react-icons/ri';
import { IoChevronForwardCircleSharp } from 'react-icons/io5';

//importing jss
import { yellow } from '../../../assets/globalJSS';

const VendorsPannelHome = ({ history, match }) => {
    return (
        <div className="vendorsPannelHome">
            <div className="introImage">
                <img src="" alt="intro image" />
            </div>
            <div className="intro">
                <div className="introHeader">
                    <Icon iconColor='white' size='40px'>
                        <RiWhatsappFill />
                    </Icon>
                    <p>Set your online Health Services</p>
                </div>
                <div className="introContent">
                    <p>Set-up online <strong>Clinic</strong></p>
                    <p>Set-up online <strong>Pharmacy</strong></p>
                    <p>Set-up online <strong>Diagnostic Center</strong></p>
                    <p>With <strong>Zero-Fees</strong> <strong>Zero-Commision</strong></p>
                </div>
                <div className="introFooter">
                    <div className="cancel">
                        Cancel
                    </div>
                    <div className="getStarted" onClick={(e) => history.push(`${match.url}/registration`)}>
                        Get started
                        <Icon size='1.5em' iconColor={yellow}>
                            <IoChevronForwardCircleSharp />
                        </Icon>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VendorsPannelHome;