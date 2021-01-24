import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './doctorAndHospitalRegistrationForm.styles.scss';

//importing actions
import {
    setName,
    setPhoneNumber,
    setAddress,
    setDegree,
    setTimeSlotForpatient,
    setFees,
    setTimings,
    setFeesCollectionOnAccountOf,
    setTeleconsulting
} from '../../../../actions/action';

const Timings = ({ day, setTimings }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [morningFrom, setMorningFrom] = useState('');
    const [morningTo, setMorningTo] = useState('');
    const [eveningFrom, setEveningFrom] = useState('');
    const [eveningTo, setEveningTo] = useState('');

    useEffect(() => {
        setTimings({
            day,
            timings: {
                isSelected: isSelected,
                morning: {
                    from: morningFrom,
                    to: morningTo
                },
                evening: {
                    from: eveningFrom,
                    to: eveningTo
                }
            }
        });
    }, [day, morningFrom, morningTo, eveningFrom, eveningTo, isSelected]);

    return (
        <div className={`timingInput ${day}`}>
            <div className="daySelect labelInput">
                <input type='radio' readOnly value={day} checked={isSelected ? true : false} onClick={(e) => { setIsSelected(prevState => !prevState) }} />
                <label htmlFor={day}>{day}</label>
            </div>
            <div className="timeSelect" style={{ pointerEvents: `${isSelected ? 'auto' : 'none'}`, opacity: isSelected ? 1 : .4, transition: '.5s ease-in-out' }}>
                <div className="morningShift">
                    <input type='text' value={morningFrom} onChange={(e) => setMorningFrom(e.target.value)} />
                    <p>To</p>
                    <input type='text' value={morningTo} onChange={(e) => setMorningTo(e.target.value)} />
                </div>
                <div className="eveningShift">
                    <input type='text' value={eveningFrom} onChange={(e) => setEveningFrom(e.target.value)} />
                    <p>To</p>
                    <input type='text' value={eveningTo} onChange={(e) => setEveningTo(e.target.value)} />
                </div>
            </div>
        </div>
    );
}

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const DoctorAndHospitalRegistrationForm = (props) => {
    const goBack = (e) => {
        e.preventDefault();
        props.history.goBack();
    }

    const save = (e) => {
        e.preventDefault();
        props.history.goBack();
    }

    return (
        <form className="doctorAndHospitalRegistrationForm">
            <h3>Add {props.type === 'addHospital' ? 'Hospital/Clinic' : 'Doctor'}</h3>
            <div className="name">
                <input
                    type='text'
                    placeholder={`Enter name of hospital`}
                    value={props.name}
                    onChange={(e) => { props.setName(e.target.value) }}
                />
            </div>
            {
                props.type === 'addHospital'
                    ? <div className="address">
                        <input
                            type='text'
                            placeholder={`Enter address of hospital`}
                            value={props.address}
                            onChange={(e) => { props.setAddress(e.target.value) }}
                        />
                    </div>
                    : null
            }
            {
                props.type === 'addDoctor'
                    ? <div className="degree">
                        <input
                            type='text'
                            placeholder={`Enter degree of doctor`}
                            value={props.degree}
                            onChange={(e) => { props.setDegree(e.target.value) }}
                        />
                    </div>
                    : null
            }
            <div className="phoneNo">
                <input
                    type='text'
                    placeholder={`Enter phone number of hospital`}
                    value={props.phoneNumber}
                    onChange={(e) => { props.setPhoneNumber(e.target.value) }}
                />
            </div>
            <div className='timeSlotAndFees'>
                <div className="fees">
                    <input
                        type='text'
                        placeholder='fees'
                        value={props.fees}
                        onChange={(e) => { props.setFees(e.target.value) }}
                    />
                </div>
                <div className="timeSlotPerPatient">
                    <input
                        type='text'
                        placeholder='eg: 30 mins'
                        value={props.timeSlot}
                        onChange={(e) => { props.setTimeSlotForpatient(e.target.value) }}
                    />
                </div>
            </div>
            <div className="feeCollectionBy">
                <div>
                    <label htmlFor="fee Collection On The Accoun tOf">Fees collection On The Account Of </label>
                </div>
                <div className='labelInput'>
                    <input
                        type='radio'
                        name='feeCollcetionBy'
                        value='hospital'
                        checked={props.feesCollectOnAccountOf.hospital ? true : false}
                        onChange={(e) => props.setFeesCollectionOnAccountOf({ hospital: true, doctor: false })}
                    />
                    <label htmlFor="hospital">hospital</label>
                </div>
                <div className='labelInput'>
                    <input
                        type='radio'
                        name='feeCollcetionBy'
                        value='doctor'
                        checked={props.feesCollectOnAccountOf.doctor ? true : false}
                        onChange={(e) => props.setFeesCollectionOnAccountOf({ hospital: false, doctor: true })}
                    />
                    <label htmlFor="doctor">doctor</label>
                </div>
            </div>
            <div className="teleConsulting">
                <div>
                    <label htmlFor="teteConsulting">Teleconsulting</label>
                </div>
                <div className='labelInput'>
                    <input
                        type='radio'
                        name='teleConsulting'
                        value='no'
                        checked={props.teleConsulting ? false : true}
                        onChange={(e) => props.setTeleconsulting(false)}
                    />
                    <label htmlFor="no">no</label>
                </div>
                <div className='labelInput'>
                    <input
                        type='radio'
                        name='teleConsulting'
                        value='yes'
                        checked={props.teleConsulting ? true : false}
                        onChange={(e) => props.setTeleconsulting(true)}
                    />
                    <label htmlFor="yes">yes</label>
                </div>
            </div>
            <div className="setTimings">
                <h3>Add Timing For Hospital</h3>
                {
                    days.map((item, index) => <Timings key={index} day={item} setTimings={props.setTimings} />)
                }
            </div>
            <div className="formButtons">
                <button onClick={goBack}>Go Back</button>
                <button onClick={save}>Save</button>
            </div>
        </form>
    );
}

const mapStatetoProps = state => ({
    name: state.doctorAndHospitalRegistration.name,
    address: state.doctorAndHospitalRegistration.address,
    degree: state.doctorAndHospitalRegistration.degree,
    phoneNumber: state.doctorAndHospitalRegistration.phoneNumber,
    fees: state.doctorAndHospitalRegistration.fees,
    timeSlot: state.doctorAndHospitalRegistration.timeSlotPerPatient,
    feesCollectOnAccountOf: state.doctorAndHospitalRegistration.feesCollectOnAccountOf,
    teleConsulting: state.doctorAndHospitalRegistration.teleConsulting,
    timing: state.doctorAndHospitalRegistration.timing
});

const mapDispatchToProps = dispatch => ({
    setName: (name) => dispatch(setName(name)),
    setAddress: (address) => dispatch(setAddress(address)),
    setDegree: (degree) => dispatch(setDegree(degree)),
    setPhoneNumber: (phoneNo) => dispatch(setPhoneNumber(phoneNo)),
    setFees: (fees) => dispatch(setFees(fees)),
    setTimeSlotForpatient: (time) => dispatch(setTimeSlotForpatient(time)),
    setTeleconsulting: (option) => dispatch(setTeleconsulting(option)),
    setFeesCollectionOnAccountOf: ({ doctor = false, hospital = true }) => dispatch(setFeesCollectionOnAccountOf({ doctor, hospital })),
    setTimings: (day, timings) => dispatch(setTimings(day, timings))
});

export default connect(mapStatetoProps, mapDispatchToProps)(withRouter(DoctorAndHospitalRegistrationForm));
