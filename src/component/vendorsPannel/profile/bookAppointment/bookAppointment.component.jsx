import React, { useState, useCallback } from 'react';
import './bookAppointment.styles.scss';

//importing custom components
import SetHospitalOrDoctor from './setHospitalOrDoctor/setHospitalOrDoctor.component';
import SetPatient from './setPatient/setPatient.component';

const SET_HOSPITAL_OR_DOCTOR = 'setHospitalOrDoctor';
const SET_PATIENT = 'setPatient';

const BookAppointment = ({ changeTab, bookAppointment, dispatch, timings, appointmentSlots, setAppointmentSlots }) => {
    const [tab, setTab] = useState(SET_HOSPITAL_OR_DOCTOR);

    const setTabSetHospitalOrDoctor = useCallback((e) => {
        if (tab !== SET_HOSPITAL_OR_DOCTOR)
            setTab(SET_HOSPITAL_OR_DOCTOR);
    }, [tab, setTab, SET_HOSPITAL_OR_DOCTOR]);

    const setTabSetPatient = useCallback((e) => {
        if (tab !== SET_PATIENT)
            setTab(SET_PATIENT);
    }, [tab, setTab, SET_PATIENT]);

    return (
        <div className="vendorsAppointmentbooking">
            {
                tab === SET_HOSPITAL_OR_DOCTOR
                    ? <SetHospitalOrDoctor goToSetPatient={setTabSetPatient} changeTab={changeTab} {...{ bookAppointment, dispatch, timings, appointmentSlots }} />
                    : <SetPatient goToSetHospitalOrDoctor={setTabSetHospitalOrDoctor} changeTab={changeTab} {...{ bookAppointment, dispatch, setAppointmentSlots, appointmentSlots }} />
            }
        </div>
    );
}

export default BookAppointment;