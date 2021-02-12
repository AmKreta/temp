import React from 'react';
import './setPatient.styles.scss';

//importing reusable components
import InputWithIcon from '../../../../reusableComponent/InputwithIcon/inputWithIcon.component';
import Icon from '../../../../reusableComponent/icon/icon.component';

//importing icon
import { FiPlus } from 'react-icons/fi';
import { MdModeEdit } from 'react-icons/md';

const SetPatient = ({ changeTab, goToSetHospitalOrDoctor }) => {
    return (
        <div className="setPatient">
            <div className="setPatientForm">
                <div className="setPatientFormHeader">
                    <div className='searchPatient'>
                        <label htmlFor="search Patient">Search Patient</label>
                        <InputWithIcon />
                    </div>
                    <div className='addPatient'>
                        <Icon>
                            <FiPlus />
                        </Icon>
                        <p>Add Patient</p>
                    </div>
                </div>
                <div className="editPatient">
                    <p> Edit Patient</p>
                    <Icon size='1.2em'>
                        <MdModeEdit />
                    </Icon>
                </div>
                <div className="patientFirstName patientInfoInput">
                    <label htmlFor="first name">First Name</label>
                    <input />
                </div>
                <div className="patientLastName patientInfoInput">
                    <label htmlFor="last Name">Last Name</label>
                    <input />
                </div>
                <div className="patientMobileNumber patientInfoInput">
                    <label htmlFor="Mobile No.">Mobile No.</label>
                    <input />
                </div>
                <div className="patientGender patientInfoInput">
                    <label htmlFor="Gender">Gender</label>
                    <select>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className="patientDob patientInfoInput">
                    <label htmlFor="DOB">Date Of Birth</label>
                    <input type='date' />
                </div>
                <div className="patientAge patientInfoInput">
                    <label htmlFor="age">Age</label>
                    <input />
                </div>
                <div className="patientPaymentStatus">
                    <label htmlFor="Payment Status">Payment Status</label>
                    <select>
                        <option>Unpaid</option>
                        <option>Paid</option>
                    </select>
                </div>
                <div className="patientVideoConsulting">
                    <label htmlFor="Video consulting">Video Consulting</label>
                    <div>
                        <div>
                            <input type='radio' />
                            <label htmlFor="Yes">Yes</label>
                        </div>
                        <div>
                            <input type='radio' />
                            <label htmlFor="No">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="setPatientsAction">
                <button className='whiteButton' onClick={goToSetHospitalOrDoctor}>Back</button>
                <button className='greenButton' onClick={changeTab}>Book</button>
            </div>
        </div>
    );
}

export default SetPatient;