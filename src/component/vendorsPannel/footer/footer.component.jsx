import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './footer.styles.scss';

//importing icons
import { FaShoppingBag, FaCompass, FaStore } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';

//reusable component
import Icon from '../../reusableComponent/icon/icon.component';

const Footer = ({ location }) => {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        if (location.pathname === '/vendor/registration') {
            setIsHidden(true);
        }
        else if (isHidden) {
            setIsHidden(false);
        }
    }, [location.pathname]);
    return (
        <div className={`vendorsPannelFooter ${isHidden ? 'hidden' : null}`}>
            <div>
                <Icon size='30px'><FaShoppingBag /></Icon>
            </div>
            <div>
                <Icon size='30px'><FaCompass /></Icon>
            </div>
            <div>
                <Icon size='30px'><MdLocationOn /></Icon>
            </div>
            <div>
                <Icon size='30px'><IoLogoWhatsapp /></Icon>
            </div>
            <div>
                <Icon size='30px' iconColor='white' ><FaStore /></Icon>
            </div>
        </div>
    );
}

export default withRouter(Footer);