import React from 'react';
import './searchResultcard.styles.scss';

import { MdLocationOn } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { RiStarSFill, RiWalletFill } from 'react-icons/ri';
import { GrAdd } from 'react-icons/gr';
import { BsCalendarFill } from 'react-icons/bs';

import logo from './check.svg';

const SearchResultCard = ({ id, name, type, avatar, address, isVarified, distance, stars, closeBy }) => {
    return (
        <div className="searchResultCard" id={id}>
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
        </div>
    );
}

export default SearchResultCard;