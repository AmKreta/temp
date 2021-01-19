import React from 'react';
import './toolBar.styles.scss';

import { BsCrop } from 'react-icons/bs';
import { MdRotate90DegreesCcw } from 'react-icons/md';
import { ImContrast } from 'react-icons/im';
import { AiOutlineTags } from 'react-icons/ai';
import { BsFillBrightnessHighFill } from 'react-icons/bs';

import { BRIGHTNESS, CONTRAST, CROP, ROTATE, ADD_TAGS } from '../tool_names';

//reusable component
import Icon from '../../../../../reusableComponent/icon/icon.component';

const ToolBar = ({ setActiveTool }) => {
    return (
        <div className="toolBar">
            <Icon iconColor='white' size='26px' onClick={() => { setActiveTool(BRIGHTNESS); }}>
                <BsFillBrightnessHighFill title={BRIGHTNESS} />
            </Icon>
            <Icon iconColor='white' size='26px' onClick={() => { setActiveTool(CROP); }}>
                <BsCrop title={CROP} />
            </Icon>
            <Icon iconColor='white' size='26px' onClick={() => { setActiveTool(ROTATE); }}>
                <MdRotate90DegreesCcw title={ROTATE} />
            </Icon>
            <Icon iconColor='white' size='26px' onClick={() => { setActiveTool(CONTRAST); }}>
                <ImContrast title={CONTRAST} />
            </Icon>
            <Icon iconColor='white' size='26px' onClick={() => { setActiveTool(ADD_TAGS); }}>
                <AiOutlineTags title={ADD_TAGS} />
            </Icon>
        </div>
    );
}

export default ToolBar;