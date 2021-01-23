import React from 'react';
import './doctorsRegistrationForm.styles.scss';

//custom component
import DoctorAndHospitalRegistrationForm from '../../doctorAndHospitalRegistrationForm/doctorAndHospitalRegistrationForm.component';


const DoctorsRegistrationForm = () => {
    return (
        <DoctorAndHospitalRegistrationForm type='addHospital'/>
    );
}

export default DoctorsRegistrationForm;