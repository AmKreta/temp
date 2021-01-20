import React from 'react';
import './selectedItem.styles.scss';

import AvailablityListItem from '../availablityListItem/availablityListItem.component';
import Timings from './timings/timings.component';

const SelectedItem = ({ data, item, selectItem }) => {
    return (
        <div className="activeListItem">
            <div className="availablity">
                <p className='active'>item1</p>
                <p>item2</p>
                <p>item3</p>
                <p>item1</p>
                <p>item2</p>
            </div>
            <AvailablityListItem {...data} id={item} {...{ item, selectItem }} />
            <Timings />
        </div>
    );
}

export default SelectedItem;