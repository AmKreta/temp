import React, { useEffect, useRef } from 'react';
import './rotateTool.styles.scss';
import { ROTATE } from '../../tool_names';

const RotateTool = ({ dispatch, value }) => {

    const rotateXRef = useRef(null);
    const rotateYRef = useRef(null);
    const rotateZRef = useRef(null);

    useEffect(() => {
        rotateXRef.current.value = value.x;
        rotateYRef.current.value = value.y;
        rotateZRef.current.value = value.z;
    });

    const changehandler = (e) => {
        dispatch({
            type: ROTATE,
            payload: {
                x: rotateXRef.current.value,
                y: rotateYRef.current.value,
                z: rotateZRef.current.value
            }
        });
    }

    return (
        <div className="rotate">
            <div>
                <label htmlFor="rotateX">X</label>
                <input type='range' step='1' min='-180' max='180' ref={rotateXRef} onChange={changehandler} />
            </div>
            <div>
                <label htmlFor="rotateY">Y</label>
                <input type='range' step='1' min='-180' max='180' ref={rotateYRef} onChange={changehandler} />
            </div>
            <div>
                <label htmlFor="rotateZ">Z</label>
                <input type='range' step='1' min='-180' max='180' ref={rotateZRef} onChange={changehandler} />
            </div>
        </div>
    );
}

export default RotateTool;