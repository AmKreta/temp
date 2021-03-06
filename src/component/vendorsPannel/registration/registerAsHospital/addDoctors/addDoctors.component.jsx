import React from 'react';
import './addDoctors.styles.scss';

//importing custom component
import DoctorAndHospitalRegistrationForm from '../../doctorAndHospitalRegistrationForm/doctorAndHospitalRegistrationForm.component';

const AddDoctors = () => {
    return (
        <div className="addDoctor">
            <DoctorAndHospitalRegistrationForm />
        </div>
    )
}

export default AddDoctors;