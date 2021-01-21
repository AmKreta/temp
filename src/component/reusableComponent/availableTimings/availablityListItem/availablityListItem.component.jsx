import React from 'react';
import { connect } from 'react-redux';
import './availablityListItem.styles.scss';

//importing actions
import { setActiveItem, setActiveItemNull } from '../../../../actions/action';

//icons
import { AiFillCloseCircle } from 'react-icons/ai';

//reusable component
import Icon from '../../icon/icon.component';

const AvailableTodayListItem = ({ id, name, specialization, fees, profilePicture, activeItem, setActiveItem, setActiveItemNull }) => {
    return (
        <div id={id} className={`availablityListItem ${activeItem === id ? 'selected' : null}`}>
            <div className="card" onClick={(e) => { setActiveItem(id) }}>
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
                    <Icon iconColor='grey' size='15px' onClick={(e) => { e.stopPropagation(); setActiveItemNull(); }} >
                        <AiFillCloseCircle />
                    </Icon>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    activeItem: state.availableTimings.activeItem
});

const mapDispatchToProps = dispatch => ({
    setActiveItem: (id) => dispatch(setActiveItem(id)),
    setActiveItemNull: () => dispatch(setActiveItemNull())
});

export default connect(mapStateToProps, mapDispatchToProps)(AvailableTodayListItem);
