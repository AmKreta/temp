import React from 'react';
import './input.styles.scss';

const InputWithIcon = ({ children, value, onChange, placeHolder }) => {
    return (
        <div className="input">
            {children}
            <input value={value} onChange={onChange} placeholder={placeHolder} />
        </div>
    );
}

export default InputWithIcon;