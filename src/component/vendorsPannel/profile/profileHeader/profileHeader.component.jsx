import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './profileHeader.styles.scss';

//importing icons
import { AiFillHome, AiTwotoneSetting } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';

//importing reusable components
import Icon from '../../../reusableComponent/icon/icon.component';

//importing jss
import { green } from '../../../../assets/globalJSS';

const Button = withRouter(({ icon, label, history, match, location }) => {
    const [isActive, setIsActive] = useState('home');

    const clickHandler = (e) => {
        history.push(`${match.url}/${label}`);
    }

    useEffect(() => {
        if (location.pathname.split('/').slice(-1)[0] === label) {
            setIsActive(true);
        }
        else {
            setIsActive(false)
        }
    }, [location.pathname]);

    return (
        <div className="vendorProfileHeaderButton">
            <div className="iconContainer" onClick={clickHandler}>
                <Icon iconColor={green} size='25px'>
                    {icon}
                </Icon>
            </div>
            <div className={`label ${isActive ? 'active' : null}`} onClick={clickHandler}>
                <p>{label}</p>
            </div>
        </div>
    );
});

const ProfileHeader = ({ location }) => {
    const businessType = useSelector(state => state.currentVendor.businessType);
    const buttonLabel = () => {
        console.log(businessType);
        if (businessType === 'doctor' || businessType === 'hospital') {
            return 'appointments';
        }
        else if (businessType === 'pharmacy') {
            return 'orders';
        }
        else if (businessType === 'pathology') {
            return 'collection';
        }
    }
    return (
        <div className="vendorProfileHeader">
            <Button
                icon={<AiFillHome />}
                label='home'
            />
            <Button
                icon={<GiHamburgerMenu />}
                label={buttonLabel()}
            />
            <Button
                icon={<AiTwotoneSetting />}
                label='setting'
            />
            <Button
                icon={<BsFillPersonFill />}
                label='promotions'
            />
        </div>
    );
}

export default withRouter(ProfileHeader);