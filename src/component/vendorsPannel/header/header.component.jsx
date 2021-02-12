import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './header.styles.scss';

//importing icon
import { AiOutlineCamera } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
//customComponents
import Icon from '../../reusableComponent/icon/icon.component';

const Header = ({ location }) => {
    const [isHidden, setIsHidden] = useState(true);
    const businessName = useSelector(state => state.currentVendor.businessName);

    useEffect(() => {
        if (location.pathname.includes('/profile') || (location.pathname.includes('registerAs') && location.pathname!== '/vendor/registerAs')) {
            setIsHidden(false);
        }
        else if (isHidden) {
            setIsHidden(true);
        }
    }, [location.pathname]);

    return (
        <div className={`vendorsPannelHeader ${isHidden ? 'hidden' : null}`}>
            <div className="addSignBoard">
                <div className="addSignBoardIcon">
                    <Icon size='30px' iconColor='white'><AiOutlineCamera /></Icon>
                </div>
                <p>Add sign board</p>
            </div>
            <div className="vendorsName">
                {businessName}
            </div>
            <div className="vendorsNotification">
                <Icon size='30px' iconColor='white'><IoMdNotificationsOutline /></Icon>
            </div>
        </div>
    );
}

export default withRouter(Header);
