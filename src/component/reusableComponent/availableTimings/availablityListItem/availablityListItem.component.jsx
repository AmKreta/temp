import React from 'react';
import './availablityListItem.styles.scss';

//icons
import { AiFillCloseCircle } from 'react-icons/ai';

//reusable component
import Icon from '../../icon/icon.component';

const AvailableTodayListItem = ({ id, name, specialization, fees, profilePicture, timingsToday, timings, item, selectItem }) => {

    return (
        <div id={id} className={`availablityListItem ${item == id ? 'selected' : null}`} onClick={() => { selectItem(id) }}>
            <div className="card">
                <div className="name">
                    <p>{name}</p>
                </div>
                <div className="specialization">
                    <p>{specialization}</p>
                </div>
                <div className="fees">
                    <p>Rs {fees}</p>
                </div>
                <div className="avatar">
                    <img src={profilePicture} alt='profile' />
                </div>
                <div className="timingToday">
                    <p>10am-2pm</p>
                    <p>6pm-9pm</p>
                </div>
                <div className="viewAllTimings">
                    view All Timings
                </div>
                <div className="close">
                    <Icon iconColor='grey' size='15px' onClick={() => { selectItem(3) }} >
                        <AiFillCloseCircle />
                    </Icon>
                </div>
            </div>
        </div>
    );
}

export default AvailableTodayListItem;
