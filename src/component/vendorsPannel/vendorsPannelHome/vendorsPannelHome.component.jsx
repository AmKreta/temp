import React from 'react';
import './vendorsPannelHome.styles.scss';

//reusableComponent
import Icon from '../../reusableComponent/icon/icon.component';

//importing icons
import { RiWhatsappFill } from 'react-icons/ri';
import { IoChevronForwardCircleSharp } from 'react-icons/io5';
import { BiLocationPlus } from 'react-icons/bi';


//importing jss
import { yellow } from '../../../assets/globalJSS';

const VendorsPannelHome = ({ history, match }) => {
    return (
        <div className="vendorsPannelHome">
            <div className="introImage">
                <img src="" alt="intro" />
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
                    <div className="cancel" onClick={() => { history.push('/home') }}>
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
            <div className="introCaption">
                <h3>Do It Yourself Website Store -in Just 5 minutes.</h3>
                <div className="largeLogo">
                    <div className="largelogoImageContainer">
                        <img src='' />
                    </div>
                    <div className='largeLogoText'>
                        <p>MEDISEEN</p>
                    </div>
                </div>
                <div className="introFeatures">
                    <div className="intorFeatureOne">
                        <p>Now every <strong>Doctor</strong>, <strong>Hospital</strong> can receive Appointments online.</p>
                        <p>Now every <strong>Pharmacy</strong>, <strong>Pathology</strong> can receive orders online.</p>
                        <p>Provide 24 * 7 healthcare service</p>
                    </div>
                    <div className='introFeatureTwo'>
                        <p>Get more patients for your business and</p>
                        <p>make more profit for yourself</p>
                    </div>
                </div>
                <div className="signUpButton">
                    <div className="signUpButtonIcon">
                        <Icon iconColor='white' size='30px'>
                            <BiLocationPlus />
                        </Icon>
                    </div>
                    <button>SignUp</button>
                </div>
            </div>
        </div>
    );
}

export default VendorsPannelHome;