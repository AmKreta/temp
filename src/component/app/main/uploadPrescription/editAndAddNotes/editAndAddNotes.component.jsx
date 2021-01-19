import React, { useEffect, useRef, useReducer, useState } from 'react';
import './editAndAddNotes.styles.scss';
import { BRIGHTNESS, CONTRAST, CROP, ROTATE, ADD_TAGS } from './tool_names';

import ToolBar from './toolBar/toolBar.component';
import Tools from './tools/tools.component';

const EditAndAddNotes = ({ image, selectImage }) => {

    const [effect, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case BRIGHTNESS:
                return { ...state, brightness: action.payload };
            case CONTRAST:
                return state;
            case CROP:
                return state;
            case ROTATE:
                return { ...state, rotate: action.payload };
            case ADD_TAGS:
                return state;
            default: return state;
        }
    }, { brightness: 100, contrast: 0, crop: { x: 0, y: 0 }, rotate: { x: 0, y: 0, z: 0 }, tags: 0 });

    const [activeTool, setActiveTool] = useState(null);

    const imgRef = useRef(null);

    useEffect(() => {
        imgRef.current.src = URL.createObjectURL(image);
    }, []);

    return (
        <div className="editAndAddNotes">
            <div className="imageSection">
                <div className="imageContainer" >
                    <img
                        ref={imgRef}
                        style={{
                            filter: `brightness(${effect.brightness}%)`,
                            transform: `rotateX(${effect.rotate.x}deg) rotateY(${effect.rotate.y}deg) rotateZ(${effect.rotate.z}deg)`
                        }}
                    />
                </div>
                {
                    activeTool === null
                        ? <ToolBar setActiveTool={setActiveTool} />
                        : <Tools {...{ activeTool, setActiveTool, dispatch, effect }} />
                }
            </div>
            <div className="notes">
                notes
            </div>
        </div>
    );
}

export default EditAndAddNotes;