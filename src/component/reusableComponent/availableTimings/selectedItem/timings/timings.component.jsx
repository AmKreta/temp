import React from 'react';
import './timings.styles.scss';

const Timings = () => {
    return (
        <div className="timings">
            <table>
                <thead>
                    <tr>
                        <th>Morning</th>
                        <th>Afternoon</th>
                        <th>Evening</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2:00 AM-3:00 PM </td>
                        <td>2:00 AM-3:00 PM </td>
                        <td>2:00 AM-3:00 PM </td>
                        <td>2:00 AM-3:00 PM </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Timings;