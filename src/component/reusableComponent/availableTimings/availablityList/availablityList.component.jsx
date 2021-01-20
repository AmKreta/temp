import React from 'react';
import './availablityList.styles.scss';

import AvailablityListItem from '../availablityListItem/availablityListItem.component';

const AvailablityList = ({ data }) => {
    return (
        <div className="availablityList">
            <AvailablityListItem {...data} id={1} />
            <AvailablityListItem {...data} id={2} />
            <AvailablityListItem {...data} id={3} />
            <AvailablityListItem {...data} id={4} />
        </div>
    );
}

export default AvailablityList;

