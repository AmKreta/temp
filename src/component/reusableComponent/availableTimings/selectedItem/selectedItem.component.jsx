import React from 'react';
import { connect } from 'react-redux';
import './selectedItem.styles.scss';

import AvailablityListItem from '../availablityListItem/availablityListItem.component';
import Timings from './timings/timings.component';

const SelectedItem = ({ data, activeItem }) => {
    return (
        <div className="activeListItem">
            <div className="availablity">
                <p className='active'>item1</p>
                <p>item2</p>
                <p>item3</p>
                <p>item1</p>
                <p>item2</p>
            </div>
            <AvailablityListItem {...data} id={activeItem} />
            <Timings />
        </div>
    );
}

const mapStateToProps = state => ({
    activeItem: state.availableTimings.activeItem
});

export default connect(mapStateToProps)(SelectedItem);