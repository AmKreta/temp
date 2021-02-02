import React from 'react';
import { connect } from 'react-redux';
import './registerAs.styles.scss';

//importing routes
import {
    REGISTER_AS_DOCTOR,
    REGISTER_AS_HOSPITAL,
    REGISTER_AS_PATHOLOGY,
    REGISTER_AS_PHARMACY,
    GET_OTP
} from '../routes';

//importing actions
import { setCurrentVendor } from '../../../../actions/action';

const RegisterAs = ({ history, match, setCurrentVendor }) => {
    const GotoPage = (page) => {
        //setting business type
        let businessType = null;
        if (page === REGISTER_AS_DOCTOR) {
            businessType = 'doctor';
        }
        else if (page === REGISTER_AS_HOSPITAL) {
            businessType = 'hospital';
        }
        else if (page === REGISTER_AS_PATHOLOGY) {
            businessType = 'pathology';
        }
        else if (page === REGISTER_AS_PHARMACY) {
            businessType = 'pharmacy';
        }

        if (businessType) {
            setCurrentVendor({ businessType });
        }

        //going to other page
        //let link = match.url.split('/');
        //link.pop();
        //link.push(GET_OTP);
        //link = link.join('/');
        //console.log(link);
        history.push(`${match.url}/${GET_OTP}`);
    }
    return (
        <div className="registerAs">
            <div className="registration">
                <div className="registerAsHeader">
                    Register As
                </div>
                <div className="registerAsButtons">
                    <div className="registerAsButton" onClick={(e) => GotoPage(REGISTER_AS_DOCTOR)}>
                        <div className="circle"></div>
                        <div className="buttonLabel" >Doctor</div>
                    </div>
                    <div className="registerAsButton" onClick={(e) => GotoPage(REGISTER_AS_HOSPITAL)}>
                        <div className="circle"></div>
                        <div className="buttonLabel" >Hospital</div>
                    </div>
                    <div className="registerAsButton" onClick={(e) => GotoPage(REGISTER_AS_PHARMACY)}>
                        <div className="circle"></div>
                        <div className="buttonLabel" >Pharmacy</div>
                    </div>
                    <div className="registerAsButton" onClick={(e) => GotoPage(REGISTER_AS_PATHOLOGY)}>
                        <div className="circle"></div>
                        <div className="buttonLabel" >Pathology</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setCurrentVendor: (payload) => dispatch(setCurrentVendor(payload))
});

export default connect(null, mapDispatchToProps)(RegisterAs);