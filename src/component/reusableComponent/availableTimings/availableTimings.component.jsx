import React from 'react';

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


const availableToday = ({ item, selectItem }) => {
    if (item) {
        return (
            <SelectedItem data={data} {...{ item, selectItem }} />
        );
    }
    else {
        return (
            <AvailablityList data={data} {...{ item, selectItem }} />
        );
    }
}

export default availableToday;
