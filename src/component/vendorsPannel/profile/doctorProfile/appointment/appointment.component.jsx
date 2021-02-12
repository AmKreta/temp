import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import './appointment.styles.scss';

//importing reusable components
import DatePicker from '../../../../reusableComponent/datePicker/datePicker.component';

//importing custm components
import TimeSlots from '../../TimeSlots/timeSlots.component';
import BookAppointment from '../../bookAppointment/bookAppointment.component';


const dummydata = [
    { timeSlot: { from: '10:00', to: '10:30' }, isBooked: true, customerName: 'Amresh Kumar', phoneNo: '9219158811' },
    { timeSlot: { from: '10:30', to: '11:00' }, isBooked: true, customerName: 'Amresh Kumar', phoneNo: '9219158811' },
    { timeSlot: { from: '11:00', to: '11:30' }, isBooked: false, customerName: 'Amresh Kumar', phoneNo: '9219158811' },
    { timeSlot: { from: '12:00', to: '12:30' }, isBooked: true, customerName: 'Amresh Kumar', phoneNo: '9219158811' },
    { timeSlot: { from: '12:30', to: '1:00' }, isBooked: true, customerName: 'Amresh Kumar', phoneNo: '9219158811' }
];

const SHOW_APPOINTMENTS = 'showAppointments';
const ISSUE_NEW_APPOINTMENT = 'issueNewAppointments';

const Appointments = () => {

    const [selectedDate, setSelectedDate] = useState({ date: (new Date()).getDate(), month: (new Date()).getMonth(), year: (new Date()).getFullYear() });
    const [tab, setTab] = useState(SHOW_APPOINTMENTS);
    //const [appointments,setAppointm]
    const hospitalList = useSelector(state => state.currentVendor.clinic);

    const setTabShowAppointment = useCallback((e) => {
        if (tab !== SHOW_APPOINTMENTS)
            setTab(SHOW_APPOINTMENTS);
    }, [tab, setTab, SHOW_APPOINTMENTS]);

    const setTabIssueNewAppointment = useCallback((e) => {
        if (tab !== ISSUE_NEW_APPOINTMENT)
            setTab(ISSUE_NEW_APPOINTMENT);
    }, [tab, setTab, ISSUE_NEW_APPOINTMENT]);

    return (
        <div className="vendorAppointments">
            <DatePicker {...{ selectedDate, setSelectedDate }} />
            <div className="appointmentsContainer">
                {
                    tab === SHOW_APPOINTMENTS
                        ?
                        <>
                            <div className='hospitalList'>
                                <select>
                                    {
                                        hospitalList.map((item, index) => <option key={index}>{item.name}</option>)
                                    }
                                </select>
                            </div>
                            {
                                dummydata.map((item, index) =>
                                    <TimeSlots
                                        name={item.customerName}
                                        phoneNo={item.phoneNo}
                                        timings={item.timeSlot}
                                        isBooked={item.isBooked}
                                        key={index}
                                        changeTab={setTabIssueNewAppointment}
                                    />)
                            }
                        </>
                        : <BookAppointment
                            changeTab={setTabShowAppointment}
                        />
                }
            </div>
        </div>
    );
}

export default Appointments;