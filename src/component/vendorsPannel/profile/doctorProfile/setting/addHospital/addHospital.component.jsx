import React from 'react';
import './addHospital.styles.scss';

//importing custom component from doctors registration
import DoctorAndHospitalRegistrationForm from '../../../../registration/doctorAndHospitalRegistrationForm/doctorAndHospitalRegistrationForm.component';

const AddHospital = () => {
    return (
        <div className="vendorsAddHospitals">
            <DoctorAndHospitalRegistrationForm />
        </div>
    );
}

export default AddHospital;

