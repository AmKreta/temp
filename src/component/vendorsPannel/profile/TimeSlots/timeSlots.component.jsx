import React from 'react';
import './timeSlots.styles.scss';

const TimeSlots = ({ isBooked, name, phoneNo, timings, changeTab }) => {
    return (
        <div className={`appoinements ${isBooked ? 'booked' : 'vacant'}`}>
            {
                isBooked
                    ? <>
                        <div className="customerInfoContainer">
                            <div className="customerName">
                                {name}
                            </div>
                            <div className="customerInfo">
                                -
                            </div>
                            <div className="customerNumber">
                                {phoneNo}
                            </div>
                        </div>
                        <div className="appointmentActions">
                            <button>Delete</button>
                            <button>Accept</button>
                        </div>
                        <div className="appointmentTime">
                            <p>{timings.from}am</p>
                            <p>-</p>
                            <p>{timings.to}am</p>
                        </div>
                    </>
                    : <div onClick={changeTab} className='appointmentTime'>
                        <p>{timings.from}am</p>
                        <p>-</p>
                        <p>{timings.to}am</p>
                    </div>
            }
        </div>
    );
}

export default TimeSlots;