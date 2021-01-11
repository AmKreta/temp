import React from 'react';
import './icon.styles.scss';

import { IconContext } from 'react-icons';

const Icon = ({ children, noRippleEffect, size = '23px', iconColor = 'black', lightColor = 'rgba(0,0,0,.1)', darkColor = 'rgba(0,0,0,.2)', onClick }) => {

    return (
        <div
            className={`iconContainer ${noRippleEffect ? null : 'rippleEffect'}`}
            style={{ '--size': size, '--lightColor': lightColor, '--darkColor': darkColor }}
            onClick={onClick}
        >
            <IconContext.Provider value={{ className: 'icon', style: { '--iconColor': iconColor } }}>
                {children}
            </IconContext.Provider>
        </div>
    );

}

export default Icon;