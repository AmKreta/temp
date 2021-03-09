import React, { useState, useEffect, useCallback, useReducer } from 'react';
import axios from 'axios';
import './appointment.styles.scss';
import { useSelector } from 'react-redux';

//importing reusable components
import DatePicker from '../../../../reusableComponent/datePicker/datePicker.component';

//importing custom components
import TimeSlots from '../../TimeSlots/timeSlots.component';
import BookAppointment from '../../bookAppointment/bookAppointment.component';

//importing services
import { getAppointmentByBusiness, updateAppointmentByID } from '../../../../../services/services';


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturdy'];

const SHOW_APPOINTMENTS = 'showAppointments';
const ISSUE_NEW_APPOINTMENT = 'issueNewAppointments';

const convertToDateObject = (hrs, min) => {
    let date = new Date();
    date.setHours(hrs);
    date.setMinutes(min);
    date.setSeconds(0);
    return date;
}

const makeAppointmentSlotsArray = (slotArr, startTime, endTime, suffix, hospitalName) => {
    //var temp = startTime;
    var start_time = convertToDateObject(startTime.split(':')[0], startTime.split(':')[1].split(' ')[0]);
    var end_time = convertToDateObject(endTime.split(':')[0], endTime.split(':')[1].split(' ')[0]);

    var temp_time = start_time; //eg 6:00 am

    //pushing to the array in the interval of 30 minutes
    while (temp_time < end_time) {
        let next_temp_time = new Date(temp_time.getTime() + 30 * 60 * 1000);//added 30 minutes , fix this
        slotArr.push({
            from: `${temp_time.getHours()}:${temp_time.getMinutes() <= 9 ? `0${temp_time.getMinutes()}` : temp_time.getMinutes()} ${suffix}`,
            to: `${next_temp_time.getHours()}:${next_temp_time.getMinutes() <= 9 ? `0${next_temp_time.getMinutes()}` : next_temp_time.getMinutes()} ${suffix}`,
            hospitalName
        });
        temp_time = next_temp_time;
    }
}

var isPresent = (arr, item) => {
    let return_data = { present: false };

    //checking for latest entry
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].timings.from.replace(' ', '') === item.from.replace(' ', '') && arr[i].timings.to.replace(' ', '') === item.to.replace(' ', '')) {
            return_data = { present: true, index: i, isCancelled: arr[i].isCancelled };
        }
    }

    return return_data;
}


const convertToTimeStamp = (selectedDate) => {
    //function to convert selected date in timeStamp
    let date = new Date();
    date.setDate(selectedDate.date);
    date.setMonth(selectedDate.month);
    date.setFullYear(selectedDate.year);
    return date.getTime();
}

/****************************************** Component ***************************************** */

const Appointments = () => {
    const [selectedDate, setSelectedDate] = useState({ date: (new Date()).getDate(), month: (new Date()).getMonth(), year: (new Date()).getFullYear() });
    const [tab, setTab] = useState(SHOW_APPOINTMENTS);
    const [timings, setTimings] = useState([]);
    const [appointmentSlots, setAppointmentSlots] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState('All');

    //timings is array for storing all available time slots on a particular day
    //appointSlots is array for storing info necessary to render timeSlots

    //const [appointments,setAppointm]
    const doctorsList = useSelector(state => state.currentVendor.doctors);
    const auth_token = useSelector(state => state.token);

    const deleteAppointment = (id, timings) => {
        axios
            .put(updateAppointmentByID(id), { isCancelled: true }, {
                headers: {
                    'Authorization': `Beared ${auth_token.accessToken}`
                }
            })
            .then(res => {
                for (let i = 0; i < appointmentSlots.length; i++) {
                    if (appointmentSlots[i].timeSlot.from.replace(' ', '') === timings.from.replace(' ', '') && appointmentSlots[i].timeSlot.to.replace(' ', '') === appointmentSlots[i].timeSlot.to.replace(' ', '')) {
                        setAppointmentSlots(prevState => {
                            let arr = prevState;
                            arr[i].isBooked = false;
                            return [...arr];
                        });
                        break;
                    }
                }
            })
            .catch(err => {
                console.log(err);
                alert('unable to delete appointment');
            });
    }

    const acceptAppointment = (id, timings) => {
        axios
            .put(updateAppointmentByID(id), { isCancelled: true }, {
                headers: {
                    'Authorization': `Beared ${auth_token.accessToken}`
                }
            })
            .then(res => {
                for (let i = 0; i < appointmentSlots.length; i++) {
                    if (appointmentSlots[i].timeSlot.from.replace(' ', '') === timings.from.replace(' ', '') && appointmentSlots[i].timeSlot.to.replace(' ', '') === appointmentSlots[i].timeSlot.to.replace(' ', '')) {
                        setAppointmentSlots(prevState => {
                            let arr = prevState;
                            arr[i].accepted = true;
                            return [...arr];
                        });
                        break;
                    }
                }
            }).catch(err => {
                console.log(err);
                alert('unable to accept appointment');
            });
    }

    const [bookAppointment, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'setBusinessName':
                return { ...state, businessName: action.payload }
            case 'setRefMobileNo':
                return { ...state, refMobileNumber: action.payload }
            case 'setTimings':
                return { ...state, timings: action.payload }
            case 'setNotes':
                return { ...state, notes: action.payload }
            case 'setPatientFirstName':
                return { ...state, patientFirstName: action.payload }
            case 'setPatientLastName':
                return { ...state, patientLastName: action.payload }
            case 'setPatientMobileNo':
                return { ...state, patientMobileNo: action.payload }
            case 'setGender':
                return { ...state, gender: action.payload }
            case 'setDob':
                return { ...state, dob: action.payload }
            case 'setAge':
                return { ...state, age: action.payload }
            case 'setPaymentStatus':
                return { ...state, paymentStatus: action.payload }
            case 'setVideoConsulting':
                return { ...state, videoConsulting: action.payload }
            case 'setDate':
                return { ...state, date: action.payload }
            default:
                return state;
        }
    }, {
        businessName: '',
        refMobileNumber: '',
        timings: '',
        notes: '',
        patientFirstName: '',
        patientLastName: '',
        patientMobileNo: '',
        gender: 'Male',
        dob: '',
        age: '',
        paymentStatus: 'unpaid',
        videoConsulting: false,
        date: ''
    });

    useEffect(() => {
        //effect for setting date for appointment booking form
        //month ranges from [0,11]
        dispatch({ type: 'setDate', payload: selectedDate });
    }, [selectedDate]);

    useEffect(() => {
        //effect for making all appointment timeslot array

        if (doctorsList) {
            let dayIndex = new Date(selectedDate.year, selectedDate.month, selectedDate.date).getDay();
            let time = doctorsList.map(item => ({ workingHours: item.workingHours[days[dayIndex]], hospitalName: item.name }));

            let morningShift = [], eveningShift = [];

            time[0].workingHours !== undefined && time.forEach(item => {
                makeAppointmentSlotsArray(morningShift, item.workingHours.morning.from, item.workingHours.morning.to, 'am', item.hospitalName);
                makeAppointmentSlotsArray(eveningShift, item.workingHours.evening.from, item.workingHours.evening.to, 'pm', item.hospitalName);
            });
            setTimings(morningShift.concat(eveningShift));
            let Timings = morningShift.concat(eveningShift), appSlots = [];

            if (Timings.length != 0) {
                axios
                    .get(`${getAppointmentByBusiness}?date=${convertToTimeStamp(selectedDate)}&isCancelled=false`, {
                        headers: {
                            'Authorization': `Bearer ${auth_token.accessToken}`
                        }
                    })
                    .then(res => {
                        let data = Timings.map(item => {
                            //checking if a particulat timeslot is present in fetched appointment time slot  
                            let isDataPresent = isPresent(res.data.payload, item);
                            //isDataPresent = {present:true,index} if true
                            //isdataPresent = {present:false} if false

                            //index is the index at which data is present in fetched array

                            //returned data will be saved in appointment slots
                            if (isDataPresent.present) {
                                return {
                                    timeSlot: item,
                                    isBooked: !isDataPresent.isCancelled,
                                    customerName: `${res.data.payload[isDataPresent.index].patient.firstName} ${res.data.payload[isDataPresent.index].patient.lastName}`,
                                    phoneNo: `${res.data.payload[isDataPresent.index].patient.mobileNumber}`,
                                    _id: res.data.payload[isDataPresent.index]._id,
                                    accepted: res.data.payload[isDataPresent.index].accepted
                                }
                            }
                            else {
                                return {
                                    timeSlot: item,
                                    isBooked: false,
                                    customerName: '',
                                    phoneNo: ''
                                }
                            }
                        });

                        setAppointmentSlots(data);
                    })
                    .catch(err => {
                        console.log(err);
                        alert('unable to fetch appointments');
                    });
            }
            else {
                setAppointmentSlots([]);
            }
        }
    }, [doctorsList, setTimings, selectedDate.year, selectedDate.month, selectedDate.date, selectedDate, setAppointmentSlots]);

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
                            <div className='hospitalList' value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
                                <select>
                                    <option value='All'>All</option>
                                    {
                                        doctorsList.map((item, index) => <option key={index} value={item.name}>{item.name}</option>)
                                    }
                                </select>
                            </div>
                            {
                                appointmentSlots &&
                                appointmentSlots.length > 0 &&
                                appointmentSlots
                                    .filter(item => selectedDoctor === 'All' || item.timeSlot.doctorName === selectedDoctor)
                                    .map((item, index) =>
                                        <>
                                            <TimeSlots
                                                key={index}
                                                name={item.customerName}
                                                phoneNo={item.phoneNo}
                                                timings={item.timeSlot}
                                                isBooked={item.isBooked}
                                                _id={item._id}
                                                key={index}
                                                changeTab={setTabIssueNewAppointment}
                                                deleteAppointment={deleteAppointment}
                                                acceptAppointment={acceptAppointment}
                                                dispatch={dispatch}
                                                accepted={item.accepted}
                                            />

                                        </>
                                    )
                            }
                        </>
                        : <BookAppointment
                            changeTab={setTabShowAppointment}
                            {...{ bookAppointment, dispatch, appointmentSlots, timings, setAppointmentSlots }}
                        />
                }
            </div>
        </div>
    );
}

export default Appointments;