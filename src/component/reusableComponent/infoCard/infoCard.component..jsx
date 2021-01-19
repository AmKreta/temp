import React from 'react';
import './infoCard.styles.scss';
import { withRouter } from 'react-router-dom';

//importing icons 
import { MdLocationOn } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { RiStarSFill, RiWalletFill } from 'react-icons/ri';
import { GrAdd } from 'react-icons/gr';
import { BsCalendarFill } from 'react-icons/bs';

import logo from './check.svg';

const SearchResultCard = ({ history, id, name, type, avatar, address, isVarified, distance, stars, closeBy, small, bio, location }) => {

    const gotoPage = (e) => {
        if (type === 'doctor') {
            history.push(`/home/doctorBooking/${id}`);
        }
        else if (type === 'hospital') {
            history.push(`/home/hospitalBooking/${id}`);
        } else if (type === 'pharmacy') {
            history.push(`/home/pharmacyOrder/${id}`);
        } else if (type === 'pathology') {
            history.push(`/home/labOrder/${id}`);
        }
    }

    return (
        <div className={`searchResultCard ${small ? 'small' : null}`} id={id} onClick={gotoPage}>
            <div className="name">
                <p>
                    {name}
                </p>
            </div>
            <div className="avatar">
                <img src={avatar} className='avatarImage' alt={`profile pic of ${name}`} />
            </div>
            <div className="address">
                <p>{address}</p>
            </div>
            <div className="isVarified">
                {
                    isVarified ? <img src={logo} alt='verified' /> : null
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
                <div className="typeOption option2">
                    <p>COD/UPI</p>
                    <IconContext.Provider value={{ className: 'typeOptionIcon' }}>
                        <RiWalletFill />
                    </IconContext.Provider>
                </div>
            </div>
            <div className="bio">
                multi speciality hospital
            </div>
            <div className="location">
                pune
            </div>
        </div>
    );

}

export default withRouter(SearchResultCard);
