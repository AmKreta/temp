import React, { useState, useEffect, useRef } from 'react';
import Radio from '@material-ui/core/Radio';
import TimeKeeper from 'react-timekeeper';
import './addDayAndTime.styles.scss';

const AddDayAndTime = ({ day, setTimings, error }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [morningFrom, setMorningFrom] = useState('');
    const [morningTo, setMorningTo] = useState('');
    const [eveningFrom, setEveningFrom] = useState('');
    const [eveningTo, setEveningTo] = useState('');
    const [showTimeKeeper, setShowTimeKeeper] = useState(false);
    const [selectedTime, setSelectedTime] = useState('12:00pm');
    const morningFromRef = useRef();
    const morningToRef = useRef();
    const eveningFromRef = useRef();
    const eveningToRef = useRef();

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

    useEffect(() => {

    }, [error]);

    const setTime = (Time) => {
        console.log(Time);
        switch (showTimeKeeper) {
            case 'morningFrom':
                setMorningFrom(Time.formatted12);
                break;
            case 'morningTo':
                setMorningTo(Time.formatted12);
                break;
            case 'eveningFrom':
                setEveningFrom(Time.formatted12);
                break;
            case 'eveningTo':
                setEveningTo(Time.formatted12);
                break;
            default:
                console.log('action not defined');
                break;
        }
    }

    const onDone = (e) => {
        setShowTimeKeeper(null);
    }

    return (
        <div className={`timingInput ${day}`}>
            <div className="daySelect labelInput">
                <Radio readOnly value={day} checked={isSelected ? true : false} onClick={(e) => { setIsSelected(prevState => !prevState) }} />
                <label htmlFor={day}>{day}</label>
            </div>
            <div className="timeSelect" style={{ pointerEvents: `${isSelected ? 'auto' : 'none'}`, opacity: isSelected ? 1 : .4, transition: '.5s ease-in-out' }}>
                <div className="morningShift">
                    <input
                        type='text'
                        value={morningFrom}
                        onChange={(e) => setMorningFrom(e.target.value)}
                        placeholder='AM'
                        onClick={(e) => {
                            setShowTimeKeeper('morningFrom');
                            if (e.target.value.length)
                                setSelectedTime(e.target.value);
                        }}
                        ref={morningFromRef}
                        className={`${error && (morningFrom.includes('pm') || morningFrom === '') ? 'erroredInput' : null}`}
                    />
                    <p>To</p>
                    <input
                        type='text'
                        value={morningTo}
                        onChange={(e) => setMorningTo(e.target.value)}
                        placeholder='AM'
                        onClick={(e) => {
                            setShowTimeKeeper('morningTo');
                            if (e.target.value.length)
                                setSelectedTime(e.target.value);
                        }}
                        ref={morningToRef}
                        className={`${error && (morningTo.includes('pm') || morningTo === '') ? 'erroredInput' : null}`}
                    />
                </div>
                <div className="eveningShift">
                    <input
                        type='text'
                        value={eveningFrom}
                        onChange={(e) => setEveningFrom(e.target.value)}
                        placeholder='PM'
                        onClick={(e) => {
                            setShowTimeKeeper('eveningFrom');
                            if (e.target.value.length)
                                setSelectedTime(e.target.value);
                        }}
                        ref={eveningFromRef}
                        className={`${error && (eveningFrom.includes('am') || eveningFrom === '') ? 'erroredInput' : null}`}
                    />
                    <p>To</p>
                    <input
                        type='text'
                        value={eveningTo}
                        onChange={(e) => setEveningTo(e.target.value)}
                        placeholder='PM'
                        onClick={(e) => {
                            setShowTimeKeeper('eveningTo');
                            if (e.target.value.length)
                                setSelectedTime(e.target.value);
                        }}
                        ref={eveningToRef}
                        className={`${error && (eveningTo.includes('am') || eveningTo === '') ? 'erroredInput' : null}`}
                    />
                </div>
            </div>
            {
                showTimeKeeper
                    ? <div className="reactTimeKeeper">
                        <TimeKeeper
                            onDoneClick={onDone}
                            onChange={setTime}
                            switchToMinuteOnHourSelect
                            time={selectedTime}
                        />
                    </div>
                    : null
            }
        </div>
    );
}

export default AddDayAndTime;