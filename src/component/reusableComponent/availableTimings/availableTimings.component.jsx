import React from 'react';
import { connect } from 'react-redux';

//custom components
import AvailablityList from './availablityList/availablityList.component';
import SelectedItem from './selectedItem/selectedItem.component';


const data = {
    name: 'Dr. Prakash',
    specialization: 'Orthopadics',
    fees: 300,
    profilePicture: 'https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/doctor-who-eleven-512.png',
    timingToday: [{}, {}],
    timings: [{}, {}, {}, {}]
};


const availableToday = ({ activeItem, isActive }) => {
    if (activeItem && isActive) {
        return (
            <SelectedItem data={data} />
        );
    }
    else {
        return (
            <AvailablityList data={data} />
        );
    }
}

const mapStateToProps = state => ({
    activeItem: state.availableTimings.activeItem
});

export default connect(mapStateToProps)(availableToday);
