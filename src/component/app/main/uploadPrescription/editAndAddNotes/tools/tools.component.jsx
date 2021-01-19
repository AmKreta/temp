import React from 'react';
import './tools.styles.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { BRIGHTNESS, CONTRAST, CROP, ROTATE, ADD_TAGS } from '../tool_names';


//custom components
import AddTagTool from './addTagTool/addTagTool.component';
import BrightnessTool from './brightnessTool/brightnessTool.component';
import ContrastTool from './contrastTool/contrastTool.component';
import CropTool from './cropTool/cropTool.component';
import RotateTool from './rotateTool/rotateTool.component';

//reusable components
import Icon from '../../../../../reusableComponent/icon/icon.component';

const Tools = ({ activeTool, setActiveTool, dispatch }) => {
    return (
        <div className="toolsContainer">
            {
                (() => {
                    switch (activeTool) {
                        case BRIGHTNESS:
                            return <BrightnessTool />;
                        case CONTRAST:
                            return <ContrastTool />;
                        case CROP:
                            return <CropTool />;
                        case ROTATE:
                            return <RotateTool />;
                        case ADD_TAGS:
                            return <AddTagTool />;
                        default:
                            return <BrightnessTool />;
                    }
                })()
            }
            <div className="exitTools">
                <Icon size='23px' onClick={(e) => { setActiveTool(null) }}>
                    <AiOutlineClose title='exit' />
                </Icon>
            </div>
        </div>
    );
}

export default Tools;