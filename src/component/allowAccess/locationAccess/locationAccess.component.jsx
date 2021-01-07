import React, { useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './locationAccessComponent.styles.scss';

//icon
import { makeStyles } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CloseIcon from '@material-ui/icons/Close';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';

//reusable button
import PrimaryIconButton from '../../reusableComponent/primaryButton.component';

const dummyData = {
    abc: { city: 'a', state: 'b' }
}

const useStyles = makeStyles(theme => ({
    blue: {
        color: '#2BBEC8'
    }
}));

const LocationAccess = ({ history }) => {

    const returnBackToAllowAccessPage = (e) => {
        history.goBack();
    }

    const [cityPinCode, setCityPinCode] = useState('');
    const [result, setResult] = useState({ state: '', city: '', error: false });
    const stateRef = useRef(null);
    const cityRef = useRef(null);

    const classes = useStyles();

    useEffect(() => {
        if (cityPinCode.length !== 0) {
            if (cityPinCode in dummyData) {
                setResult({ state: dummyData.abc.state, city: dummyData.abc.city, error: false });
            }
            else {
                setResult({ error: true })
            }
        }
    }, [cityPinCode]);

    useEffect(() => {
        if (!result.error) {
            stateRef.current.value = result.state;
            cityRef.current.value = result.city;
        }
    }, [result]);

    return (
        <div className="locationAccessContainer">
            <div className="locationAccess">

                <div className="locationAccessHeader">
                    <div className='searchContainer'>
                        <div className='searchLabel'>
                            Search
                        </div>
                        <div className='searchIcon'>
                            <CloseIcon onClick={returnBackToAllowAccessPage} />
                        </div>
                    </div>
                    <div className='setCurrentLocationContainer'>
                        <div className='setCurrrentLocationIcon'>
                            <GpsFixedIcon className={classes.blue} />
                        </div>
                        <div className='setCurrentLocationLabel'>
                            Set Current Location
                        </div>
                    </div>
                </div>

                <div className="enterCityPincode">
                    <div className="inputCityPincodeIcon">
                        <LocationOnIcon />
                    </div>
                    <input id='cityPincodeInput' value={cityPinCode} onChange={(e) => { setCityPinCode(e.target.value) }} placeholder='Enter Pin Code Or City Name'/>
                    {result.error ? <p className='cityPincodeInputError'>no result found enter again</p> : null}
                </div>

                <div className="cityPincodeSearchResult">
                    <input id='state' disabled ref={stateRef} placeholder='state' />
                </div>

                <div className='cityPincodeSearchResult'>
                    <input id='city' disabled ref={cityRef} placeHolder='city' />
                </div>

                <div className="setCityPinCodeSearchOk">
                    <PrimaryIconButton label='ok' onClick={returnBackToAllowAccessPage} />
                </div>
            </div>
        </div>
    );
}

export default withRouter(LocationAccess);