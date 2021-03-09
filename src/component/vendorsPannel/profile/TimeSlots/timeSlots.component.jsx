import React from 'react';
import './timeSlots.styles.scss';

const TimeSlots = ({ accepted, isBooked, name, phoneNo, timings, changeTab, _id, deleteAppointment, acceptAppointment, dispatch }) => {

    return (
        <div className={`appoinements ${isBooked ? 'booked' : 'vacant'} ${accepted ? 'accepted' : 'notAccepted'}`}>
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
                            {
                                !accepted
                                    ? <>
                                        <button onClick={() => deleteAppointment(_id, timings)} > Delete</button>
                                        <button onClick={() => acceptAppointment(_id, timings)}>Accept</button>
                                    </>
                                    : <p>Accepted</p>
                            }
                        </div>
                        <div className="appointmentTime bookedAppointmentTime">
                            <p>{timings.from}</p>
                            <p>-</p>
                            <p>{timings.to}</p>
                        </div>
                    </>
                    : <div onClick={(e) => {
                        changeTab();
                        dispatch({ type: 'setTimings', payload: timings });
                    }}
                        className='appointmentTime'
                    >
                        <p>{timings.from}</p>
                        <p>-</p>
                        <p>{timings.to}</p>
                    </div>
            }
        </div>
    );
}

export default TimeSlots;