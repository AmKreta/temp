import React from 'react';
import './addHospitals.styles.scss';

//custom component
import DoctorAndHospitalRegistrationForm from '../../doctorAndHospitalRegistrationForm/doctorAndHospitalRegistrationForm.component';


const AddHospitals = () => {
    return (
        <DoctorAndHospitalRegistrationForm type='addHospital' />
    );
}

export default AddHospitals;