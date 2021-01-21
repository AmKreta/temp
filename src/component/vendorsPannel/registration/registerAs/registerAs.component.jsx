import React from 'react';
import { withRouter } from 'react-router-dom';
import './registerAs.styles.scss';

const data = ['Doctor', 'Hospital', 'Pharmacy', 'Pathology'];

const Button = withRouter(({ label, history, match }) => {
    return (
        <div className="registerAsButton">
            <div className="circle"></div>
            <div className="buttonLabel" onClick={(e) => history.push(`${match.url}/registerAs${label}`)}>{label}</div>
        </div>
    );
});

const RegisterAs = () => {
    return (
        <div className="registerAs">
            <div className="registration">
                <div className="registerAsHeader">
                    Register As
                </div>
                <div className="registerAsButtons">
                    {
                        data.map((item, index) => <Button key={index} label={item} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default RegisterAs;