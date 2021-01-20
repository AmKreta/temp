import React from 'react';
import './inputWithIcon.styles.scss';

//icon
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons';


const inputWithIcon = ({ width = '100%', padding = '0 2%', height = 'auto', value = '', onChange, onFocus, placeHolder = '' }) => {
    return (
        <div className="inputContainer" style={{ '--width': width, '--padding': padding, '--height': height }}>
            <input type='text' value={value} onChange={onChange} onFocus={onFocus} placeholder={placeHolder} />
            <IconContext.Provider value={{ className: 'inputIcon' }}>
                <AiOutlineSearch />
            </IconContext.Provider>
        </div>
    );
}

export default inputWithIcon;
