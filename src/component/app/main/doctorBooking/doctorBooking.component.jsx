import React from 'react';
import { connect } from 'react-redux';
import './doctorBooking.styles.scss';

//importing actions
import {
    setActiveItem,
    setActiveItemNull,
    setActiveTab,
    setActiveTabNull,
    fetchAvailableToday,
    fetchAvailableTomorrow
} from '../../../../actions/action';

//reusableComponent
import InfoCard from '../../../reusableComponent/infoCard/infoCard.component.';
import AvailableTimings from '../../../reusableComponent/availableTimings/availableTimings.component';

const DoctorBooking = ({ history, selectedData, activeTab, setActiveTabNull, setActiveItemNull, setActiveTab, setActiveItem }) => {
  
    return (
        <div className="doctorBooking">
            <div className="infoCardContainer" onClick={() => { setActiveTabNull(); setActiveItemNull(); }}>
                <InfoCard data={selectedData} small={activeTab ? true : false} />
            </div>
            <div className={`availableToday info ${activeTab === 'availableToday' ? 'activeTab' : null}`} onClick={(e) => { setActiveTab('availableToday'); }} >
                <p>Available Today</p>
                <p onClick={(e) => { history.push('/home/about'); }}>About</p>
                <AvailableTimings isActive={activeTab === 'availableToday' ? true : false} />
            </div>
            <div className={`availableTomorrowOnwards info ${activeTab === 'availableTomorrowOnwards' ? 'activeTab' : null}`} onClick={(e) => { setActiveTab('availableTomorrowOnwards'); }}>
                <p>Available Tomorrow onwards</p>
                <AvailableTimings isActive={activeTab === 'availableTomorrowOnwards' ? true : false} />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    selectedData: state.search.selectedData,
    activeTab: state.availableTimings.activeTab,
});

const mapDispatchToProps = dispatch => ({
    setActiveTabNull: () => dispatch(setActiveTabNull()),
    setActiveTab: (tab) => dispatch(setActiveTab(tab)),
    setActiveItemNull: () => dispatch(setActiveItemNull()),
    setActiveItem: () => dispatch(setActiveItem()),
    fetchAvailableToday: () => dispatch(fetchAvailableToday()),
    fetchAvailableTomorrow: () => dispatch(fetchAvailableTomorrow())
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorBooking);