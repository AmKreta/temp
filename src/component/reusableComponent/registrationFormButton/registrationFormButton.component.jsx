import React from 'react';
import './registrationFormButton.styles.scss';

//importing reusable components
import Icon from '../icon/icon.component';

//importing jss
import { purple } from '../../../assets/globalJSS';

const RegistrationFormButton = ({ translucent, icon1, label = [], icon2, img, alt = 'broken', onClick = () => { }, iconSize = '1.8em', iconColor = 'white' }) => {
    return (
        <div className={`flexContainer ${translucent ? 'translucent' : null}`} onClick={onClick}>
            <div className='businessInformationIcon'>
                {
                    img
                        ? <img src={img} alt={alt} />
                        : null
                }
                {
                    icon1
                        ? <Icon iconColor={iconColor} size={iconSize}>
                            {icon1}
                        </Icon>
                        : null
                }
            </div>
            <div className='flexContainerLabel'>
                {
                    label.length
                        ? label.map((item, index) => <div key={index}>{item}</div>)
                        : null
                }
            </div>
            {
                icon2
                    ? <Icon iconColor={translucent ? 'black' : purple}>
                        {icon2}
                    </Icon>
                    : null
            }
        </div>
    );
}


export default RegistrationFormButton;
