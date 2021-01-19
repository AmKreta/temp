import React, { useRef, useEffect } from 'react';
import './brightnessTool.styles.scss';
import { BRIGHTNESS } from '../../tool_names';

const BrightnessTool = ({ dispatch, value }) => {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.value = value;
    }, []);

    const changeHandler = (e) => {
        dispatch({ type: BRIGHTNESS, payload: e.target.value });
        console.log(value, e.target.value)
    }

    return (
        <div className="brightness">
            <input
                type='range'
                min='20'
                steps='1'
                max='200'
                onChange={changeHandler}
                ref={inputRef}
            />
        </div>
    );
}

export default BrightnessTool;