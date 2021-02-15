import React from 'react';
import { useSelector } from 'react-redux';
import './home.styles.scss';

//importing reusable components
import InfoCard from '../../../../reusableComponent/infoCard/infoCard.component.';

//importing logo
import Logo from './logo.svg';

const Home = () => {
    const currentVendor = useSelector(state => state.currentVendor);
    return (
        <div className="vendorHome">
            <div className="infoContainer">
                <InfoCard data={currentVendor} large />
            </div>
            <div className="doctdeskApi vendorApi">
                <div className="apiLogo">
                    <img src={Logo} alt='doctin Api' />
                </div>
                <div className="apiInfo">
                    <p>Download <strong>DOCTIN</strong> App</p>
                    <p>To Manage Appointment And Clinic</p>
                </div>
                <div className="appUrl">
                    <p>www.googleplay.com / Doctin233/DR....</p>
                </div>
            </div>
            <div className="vendorInfo">
                <div className="vendorApiUserId">
                    <p>UserId:</p>
                    <p>1122334455</p>
                </div>
                <div className="vendorApiLoginMethod">
                    <p>Password or OTP</p>
                </div>
            </div>
        </div>
    );
}

export default Home;