import React, { useState, useEffect } from 'react';
import './doctorBooking.styles.scss';

//reusableComponent
import InfoCard from '../../../reusableComponent/infoCard/infoCard.component.';
import AvailableTimings from '../../../reusableComponent/availableTimings/availableTimings.component';

const data = { name: 'Name', type: 'doctor', avatar: 'https://pickaface.net/gallery/avatar/20130418_030937_4133_dp.png', address: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', stars: 5, isVarified: true, distance: '5.5km', closeBy: '10pm', id: 1 };

const DoctorBooking = ({ history, id }) => {

    const [item, selectItem] = useState(null);
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        console.log(item);
    }, [item]);

    return (
        <div className="doctorBooking">
            <div className="infoCardContainer" onClick={() => { setActiveTab(null); selectItem(null); }}>
                <InfoCard {...data} small={activeTab ? true : false} />
            </div>
            <div className={`availableToday info ${activeTab === 'availableToday' ? 'activeTab' : null}`} onMouseEnter={(e) => { setActiveTab('availableToday'); }} >
                <p>Available Today</p>
                <p onClick={(e) => { history.push('/home/about'); }}>About</p>
                <AvailableTimings item={activeTab === 'availableToday' ? item : null} selectItem={selectItem} />
            </div>
            <div className={`availableTomorrowOnwards info ${activeTab === 'availableTomorrowOnwards' ? 'activeTab' : null}`} onMouseEnter={(e) => { setActiveTab('availableTomorrowOnwards'); }}>
                <p>Available Tomorrow onwards</p>
                <AvailableTimings item={activeTab === 'availableTomorrowOnwards' ? item : null} selectItem={selectItem} />
            </div>
        </div>
    );
}

export default DoctorBooking;