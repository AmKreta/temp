import React from 'react';
import './setHospitalOrDoctor.styles.scss';

const SetHospitalOrDoctor = ({ changeTab, goToSetPatient }) => {
    return (
        <div className="setDoctorOrHospital">
            <div className="setDoctorOrHospitalForm">
                <div className='hospitalsName'>
                    <label htmlFor="hospital name">Hospital Name</label>
                    <select>
                        <option>Jupiter Hospital</option>
                    </select>
                </div>
                <div className='hospitalTime'>
                    <label htmlFor="hospital time">Hospital Time</label>
                    <select>
                        <option>10:30Am-11:20Am</option>
                    </select>
                </div>
                <div className='notes'>
                    <label htmlFor="notes">Notes</label>
                    <input />
                </div>
                <div className='RefrenceMobileNumber'>
                    <label htmlFor="Refrence mobile number">Refrence mobile number</label>
                    <input />
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