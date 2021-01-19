import React from 'react';
import './availablityList.styles.scss';

import AvailablityListItem from '../availablityListItem/availablityListItem.component';

const AvailablityList = ({ data, item, selectItem }) => {
    return (
        <div className="availablityList">
            <AvailablityListItem {...data} id={1} {...{ item, selectItem }} />
            <AvailablityListItem {...data} id={2} {...{ item, selectItem }} />
            <AvailablityListItem {...data} id={3} {...{ item, selectItem }} />
            <AvailablityListItem {...data} id={4} {...{ item, selectItem }} />
        </div>
    );
}

export default AvailablityList;

