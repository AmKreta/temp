import React, { useState, useEffect } from 'react';
import './addDayAndTime.styles.scss';

const AddDayAndTime = ({ day, setTimings }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [morningFrom, setMorningFrom] = useState('');
    const [morningTo, setMorningTo] = useState('');
    const [eveningFrom, setEveningFrom] = useState('');
    const [eveningTo, setEveningTo] = useState('');

    useEffect(() => {
        setTimings({
            day,
            timings: {
                isSelected: isSelected,
                morning: {
                    from: morningFrom,
                    to: morningTo
                },
                evening: {
                    from: eveningFrom,
                    to: eveningTo
                }
            }
        });
    }, [day, morningFrom, morningTo, eveningFrom, eveningTo, isSelected]);

    return (
        <div className={`timingInput ${day}`}>
            <div className="daySelect labelInput">
                <input type='radio' readOnly value={day} checked={isSelected ? true : false} onClick={(e) => { setIsSelected(prevState => !prevState) }} />
                <label htmlFor={day}>{day}</label>
            </div>
            <div className="timeSelect" style={{ pointerEvents: `${isSelected ? 'auto' : 'none'}`, opacity: isSelected ? 1 : .4, transition: '.5s ease-in-out' }}>
                <div className="morningShift">
                    <input type='text' value={morningFrom} onChange={(e) => setMorningFrom(e.target.value)} />
                    <p>To</p>
                    <input type='text' value={morningTo} onChange={(e) => setMorningTo(e.target.value)} />
                </div>
                <div className="eveningShift">
                    <input type='text' value={eveningFrom} onChange={(e) => setEveningFrom(e.target.value)} />
                    <p>To</p>
                    <input type='text' value={eveningTo} onChange={(e) => setEveningTo(e.target.value)} />
                </div>
            </div>
        </div>
    );
}

export default AddDayAndTime;