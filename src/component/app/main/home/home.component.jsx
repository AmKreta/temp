import React from 'react';
import './home.styles.scss';

import clsx from 'clsx';

import { IconButton, makeStyles, Button } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ApartmentIcon from '@material-ui/icons/Apartment';
import Battery20Icon from '@material-ui/icons/Battery20';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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

const IconButtonContainer = ({ icon, caption }) => {
    return (
        <div className="iconButton">
            <div className="iconContainer">
                <IconButton >
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

const ButtonContainer = ({ label }) => {
    const classes = useStyles();
    return (
        <div className="buttonContainer">
            <IconButton className={classes.blueColor}>
                <ExitToAppIcon font-size='medium' />
            </IconButton>
            <Button className={classes.blueColor}>
                {label}
            </Button>
        </div>
    );
}

const Home = () => {
    const classes = useStyles();
    return (
        <div className="home">
            <div className="iconTab">

                <IconButtonContainer
                    icon={<PersonIcon fontSize='large' className={clsx([classes.colorWhite, classes.large])} />}
                    caption='Doctor'
                />
                <IconButtonContainer
                    icon={<ApartmentIcon fontSize='large' className={clsx([classes.colorWhite, classes.large])} />}
                    caption='Pharmacy'
                />
                <IconButtonContainer
                    icon={<PersonIcon fontSize='large' className={clsx([classes.colorWhite, classes.large])} />}
                    caption='Hospital'
                />
                <IconButtonContainer
                    icon={<Battery20Icon fontSize='large' className={clsx([classes.colorWhite, classes.large])} />}
                    caption='Pathology'
                />

            </div>
            <div className="buttonTab">

                <ButtonContainer label='Book Appointment / Order' />
                <ButtonContainer label='Upload Prescription' />
                <ButtonContainer label='Reorder or Reappointment' />
                <ButtonContainer label='Setup Your Business Website' />

            </div>
        </div>
    );
}

export default Home;