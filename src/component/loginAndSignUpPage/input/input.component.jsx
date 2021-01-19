import React from 'react';
import './input.styles.scss';

const InputWithIcon = ({ children, value, onChange, placeholder, type = 'text' }) => {
    return (
        <div className="input">
            {children}
            <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    );
}

export default InputWithIcon;
