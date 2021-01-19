import React from 'react';
import './home.styles.scss';

import clsx from 'clsx';

import { HOSPITAL, DOCTOR, PATHOLOGY, PHARMACY, AMBULANCE } from '../categories';

//icons
import { IconButton, makeStyles, Button } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ApartmentIcon from '@material-ui/icons/Apartment';
import Battery20Icon from '@material-ui/icons/Battery20';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { MdLocationOn } from 'react-icons/md';
import { IconContext } from 'react-icons';

//images
//import BackgroundImage from '../../../../assets/images/background.png';

const useStyles = makeStyles((theme) => ({
    colorWhite: {
        color: 'White'
    },
    large: {
        transform: 'scale(1.3)',
    },
    blueColor: {
        color: '#2BBEC8',
        textDecoration: 'bold',
        fontSize: '.8em'
    }
}));

const IconButtonContainer = ({ icon, caption, onClick, hideInSmallScreen }) => {
    return (
        <div className={`iconButton ${hideInSmallScreen ? 'hiddenIconButton' : null}`}>
            <div className="iconContainer">
                <IconButton onClick={onClick}>
                    {icon}
                </IconButton>
            </div>
            <p className='caption'>{caption}</p>
            <div className="iconTabNotification">
                4
            </div>
        </div>
    );
}

const ButtonContainer = ({ label, onClick }) => {
    const classes = useStyles();
    return (
        <div className="buttonContainer" onClick={onClick}>
            <IconButton className={classes.blueColor} >
                <ExitToAppIcon />
            </IconButton>
            <Button className={classes.blueColor} >
                {label}
            </Button>
        </div>
    );
}

const Home = ({ history, match }) => {
    const classes = useStyles();

    const gotoPage = (page) => {
        history.push(`${match.url}/${page}/`);
    }

    return (
        <div className="home" /*style={{ background: `transparent url(${BackgroundImage}) 0% 0% repeat padding-box`, backgroundSize: 'contain' }}*/>
            <div className="iconTab">

                <IconButtonContainer
                    icon={<PersonIcon fontSize='large' className={clsx([classes.colorWhite, classes.large])} />}
                    caption='Doctor'
                    onClick={() => { gotoPage(`search/${DOCTOR}`) }}
                />
                <IconButtonContainer
                    icon={<ApartmentIcon fontSize='large' className={clsx([classes.colorWhite, classes.large])} />}
                    caption='Pharmacy'
                    onClick={() => { gotoPage(`search/${PHARMACY}`) }}
                />
                <IconButtonContainer
                    icon={<PersonIcon fontSize='large' className={clsx([classes.colorWhite, classes.large])} />}
                    caption='Hospital'
                    onClick={() => { gotoPage(`search/${HOSPITAL}`) }}
                />
                <IconButtonContainer
                    icon={<Battery20Icon fontSize='large' className={clsx([classes.colorWhite, classes.large])} />}
                    caption='Pathology'
                    onClick={() => { gotoPage(`search/${PATHOLOGY}`) }}
                />
                <IconButtonContainer
                    icon={<Battery20Icon fontSize='large' className={clsx([classes.colorWhite, classes.large])} />}
                    caption='Ambulance'
                    onClick={() => { gotoPage(`search/${AMBULANCE}`) }}
                    hideInSmallScreen
                />
                <IconButtonContainer
                    icon={<Battery20Icon fontSize='large' className={clsx([classes.colorWhite, classes.large])} />}
                    caption='Pathology'
                    onClick={() => { gotoPage("search/pathology") }}
                    hideInSmallScreen
                />

            </div>

            <div className="signInTab">
                <div className='signInButtonContainer'>
                    <IconContext.Provider value={{ className: 'signInButtonIcon' }}>
                        <MdLocationOn />
                    </IconContext.Provider>
                    <Button type='button'>Sign IN</Button>
                </div>
            </div>

            <div className="buttonTab">

                <ButtonContainer label='Book Appointment / Order' />
                <ButtonContainer label='Upload Prescription' onClick={() => { gotoPage('uploadPrescription') }} />
                <ButtonContainer label='Reorder or Reappointment' />
                <ButtonContainer label='Setup Your Business Website' />
                <div className="appLogo">
                    appLogo
                </div>

            </div>
        </div>
    );
}

export default Home;