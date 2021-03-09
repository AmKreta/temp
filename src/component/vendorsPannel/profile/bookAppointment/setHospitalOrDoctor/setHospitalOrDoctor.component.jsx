import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './setHospitalOrDoctor.styles.scss';

const SetHospitalOrDoctor = ({ changeTab, goToSetPatient, bookAppointment, dispatch, timings, appointmentSlots }) => {
    const [availableAppointmentTimings, setAvailableAppointmentTimings] = useState([]);
    const businessType = useSelector(state => state.currentVendor.businessType);
    const clinics = useSelector(state => state.currentVendor.clinic);
    const doctors = useSelector(state => state.currentVendor.doctors);

    useEffect(() => {
        appointmentSlots.forEach(item => {
            if (!item.isBooked) {
                setAvailableAppointmentTimings(prevState => [...prevState, item]);
            }
        });
    }, [setAvailableAppointmentTimings, appointmentSlots]);

    return (
        <div className="setDoctorOrHospital">
            <div className="setDoctorOrHospitalForm">
                <div className='hospitalsName'>
                    <label htmlFor="hospital name">Hospital Name</label>
                    <select value={bookAppointment.businessName} onChange={(e) => dispatch({ type: 'setBusinessName', payload: e.target.value })}>
                        {
                            businessType === 'doctor'
                                ? clinics.map((item, index) => {
                                    return <option key={index}>{item.name}</option>
                                })

                                : null
                        }
                        {
                            businessType === 'hospital'
                                ? doctors.map((item, index) => {
                                    return <option key={index}>{item.name}</option>
                                })
                                : null
                        }
                    </select>
                </div>
                <div className='hospitalTime'>
                    <label htmlFor="hospital time">Hospital Time</label>
                    <select value={`${bookAppointment.timings.from}-${bookAppointment.timings.to}`} onChange={(e) => dispatch({ type: 'setTimings', payload: { from: e.target.value.split('-')[0], to: e.target.value.split('-')[1] } })}>
                        {
                            availableAppointmentTimings.length && availableAppointmentTimings.map((item, index) => {
                                return <option key={index} value={`${item.timeSlot.from}-${item.timeSlot.to}`}>{item.timeSlot.from}-{item.timeSlot.to}</option>
                            })
                        }
                    </select>
                </div>
                <div className='notes'>
                    <label htmlFor="notes">Notes</label>
                    <input
                        type='text'
                        value={bookAppointment.notes}
                        onChange={(e) => dispatch({ type: 'setNotes', payload: e.target.value })}
                    />
                </div>
                <div className='RefrenceMobileNumber'>
                    <label htmlFor="Refrence mobile number">Refrence mobile number</label>
                    <input
                        type='text'
                        value={bookAppointment.refMobileNo}
                        onChange={(e) => dispatch({ type: 'setRefMobileNo', payload: e.target.value })}
                    />
                </div>
            </div>
            <div className="setDoctorOrHospitalActions">
                <button className='whiteButton' onClick={changeTab}>Back</button>
                <button className='greenButton' onClick={goToSetPatient}>Next</button>
            </div>
        </div>
    );
}

export default SetHospitalOrDoctor;