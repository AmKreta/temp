import React from 'react';
import './registrationFormButton.styles.scss';

//importing reusable components
import Icon from '../icon/icon.component';

const iconColor = 'white';
const iconSize = '2.5em';

const RegistrationFormButton = ({ icon1, label = [], icon2, img, alt = 'broken', onClick = () => { } }) => {
    return (
        <div className="flexContainer" onClick={onClick}>
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
                    ? <Icon iconColor='black !important'>
                        {icon2}
                    </Icon>
                    : null
            }
        </div>
    );
}


export default RegistrationFormButton;