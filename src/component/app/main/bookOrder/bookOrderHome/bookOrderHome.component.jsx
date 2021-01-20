import React, { useState, useEffect } from 'react';
import './bookOrderhome.styles.scss';

//customComponents
import LocalHeader from '../localHeader/localHeader.component';

//reusable component
import AvailablityListItem from '../../../../reusableComponent/availableTimings/availablityListItem/availablityListItem.component';

const BookOrderHome = () => {
    const [date, setDate] = useState(null);
    useState(() => { 
        
    })
    return (
        <div className="bookOrderHome bookOrderChild">
            <LocalHeader />
            <div className="bookOrderChildMain">
                <AvailablityListItem fees={300} />
                <div className="selectDate">

                </div>
            </div>
        </div>
    );
}

export default BookOrderHome;