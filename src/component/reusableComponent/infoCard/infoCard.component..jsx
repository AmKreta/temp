import React from 'react';
import { connect } from 'react-redux';
import './infoCard.styles.scss';
import { withRouter } from 'react-router-dom';

//importing actions
import { selectData } from '../../../actions/action';

//importing icons 
import { MdLocationOn } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { RiStarSFill, RiWalletFill } from 'react-icons/ri';
import { GrAdd } from 'react-icons/gr';
import { BsCalendarFill } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

//verified logo
import logo from './check.svg';

//importing reusable component
import Icon from '../icon/icon.component';

//importing jss
import { green } from '../../../assets/globalJSS';

const InfoCard = ({ data, history, stars = 5, closeBy = '10pm', distance = 3.3, small, selectData, large }) => {
    const {
        _id,
        firstName,
        lastName,
        businessName,
        type,
        photo,
        area,
        city,
        state,
        pincode,
        isVerified,
        //isActive,
        specialist
    } = data;

    const gotoPage = (e) => {
        selectData(data);
        if (type === 'doctor') {
            history.push(`/home/doctorBooking/${_id}`);
        }
        else if (type === 'hospital') {
            history.push(`/home/hospitalBooking/${_id}`);
        } else if (type === 'pharmacy') {
            history.push(`/home/pharmacyOrder/${_id}`);
        } else if (type === 'pathology') {
            history.push(`/home/labOrder/${_id}`);
        }
    }

    const share = (e) => {
        e.stopPropagation();
        e.cancellable = true;
        if (navigator.share) {
            navigator
                .share({
                    title: 'WebShare API Demo',
                    url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
                })
                .then(() => {
                    console.log('Thanks for sharing!');
                })
                .catch(() => {
                    alert('something went wrong')
                });
        } else {
            alert('share permission not granted');
        }
    }

    return (
        <div className={`searchResultCard ${small ? 'small' : null} ${large ? 'large' : null}`} id={_id} onClick={gotoPage}>
            <div className="name">
                <p>
                    {businessName}
                </p>
            </div>
            <div className="avatar">
                {photo && <img src={photo} className='avatarImage' alt={`profile pic of ${firstName + lastName}`} />}
            </div>
            <div className="address">
                <p>{area}</p>
                <p>{city}</p>
                <p>{state},{' ' + pincode}</p>
            </div>
            <div className="isVarified">
                {
                    isVerified ? <img src={logo} alt='verified' /> : null
                }
            </div>
            <div className="stars">
                <IconContext.Provider value={{ className: 'starIcons' }}>
                    {
                        (() => {
                            let starIcons = [];
                            for (let i = 0; i < stars; i++) {
                                starIcons.push(<RiStarSFill key={i} />);
                            }
                            return starIcons;
                        })()
                    }
                </IconContext.Provider>
            </div>
            <div className="distance">
                <IconContext.Provider value={{ className: 'distanceIcon' }}>
                    <MdLocationOn />
                </IconContext.Provider>
                <p>
                    {distance}
                </p>
            </div>
            <div className="closeBy">
                <p>
                    close by {closeBy}
                </p>
            </div>
            <div className="type">
                <div className="typeOption option1">
                    <p>Online Consulting</p>
                    <IconContext.Provider value={{ className: 'typeOptionIcon' }}>
                        <GrAdd />
                    </IconContext.Provider>
                </div>
                <div className="typeOption option2">
                    <p>Online Appointment</p>
                    <IconContext.Provider value={{ className: 'typeOptionIcon' }}>
                        <BsCalendarFill />
                    </IconContext.Provider>
                </div>
                <div className="typeOption option3">
                    <p>COD/UPI</p>
                    <IconContext.Provider value={{ className: 'typeOptionIcon' }}>
                        <RiWalletFill />
                    </IconContext.Provider>
                </div>
            </div>
            <div className="bio">
                {specialist}
            </div>
            <div className="location">
                pune
            </div>
            <div className="previewPersonalWebsite">
                <p>Preview Of Personal Website</p>
                <p>www.mediseen.in/{businessName}</p>
            </div>
            <div className="share">
                <Icon iconColor={green} size='40px' onClick={share}>
                    <IoLogoWhatsapp />
                </Icon>
            </div>
        </div>
    );

}

const mapDispatchToProps = dispatch => ({
    selectData: (data) => dispatch(selectData(data))
});

export default connect(null, mapDispatchToProps)(withRouter(InfoCard));
