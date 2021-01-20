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


//verified logo
import logo from './check.svg';

const InfoCard = ({ data, history, stars = 5, closeBy = '10pm', distance = 3.3, small, selectData }) => {
    const {
        _id,
        firstName,
        lastName,
        businessName,
        type,
        image,
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

    return (
        <div className={`searchResultCard ${small ? 'small' : null}`} id={_id} onClick={gotoPage}>
            <div className="name">
                <p>
                    {businessName}
                </p>
            </div>
            <div className="avatar">
                <img src={image} className='avatarImage' alt={`profile pic of ${firstName + lastName}`} />
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
        </div>
    );

}

const mapDispatchToProps = dispatch => ({
    selectData: (data) => dispatch(selectData(data))
});

export default connect(null,mapDispatchToProps)(withRouter(InfoCard));
