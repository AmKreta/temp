import React from 'react';
import './inputWithIcon.styles.scss';

//icon
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons';


const inputWithIcon = () => {
    return (
        <div className="inputContainer">
            <input type='text' />
            <IconContext.Provider value={{ className: 'icon' }}>
                <AiOutlineSearch />
            </IconContext.Provider>
        </div>
    );
}

export default inputWithIcon;
