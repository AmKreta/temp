import React from 'react';
import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';

// importing icons
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SdStorageIcon from '@material-ui/icons/SdStorage';
import ContactsIcon from '@material-ui/icons/Contacts';

// allow access button on the page custom component
import AllowAccessPageButtons from './allowAccessPageButtons/allowAccessPageButtons.component';

const useStyles = makeStyles(theme => ({
    bottomPadding: {
        paddingBottom: '3%'
    },
    height65: {
        height: '57%'
    },
    rounded: {
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        margin: theme.spacing(1.3),
        transform: 'scale(1.4)',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        color: '#1EBE71'
    },
    blackBorder: {
        border: '2px solid black'
    },
    gradientBackground: {
        backgroundImage: 'linear-gradient(90deg, rgba(29,233,182,1), rgba(43,190,200,1))',
        borderRadius: '20px',
        color: 'rgba(255,255,255,1)',
        marginTop: theme.spacing(1)
    },
    whiteBackground: {
        backgroundColor: 'white',
        padding: theme.spacing(1)
    },
    start: {
        background: theme.palette.primary.main,
        borderRadius: '60px',
        color: 'white'
    },
    pinkGradientBackground: {
        backgroundImage: 'linear-gradient(90deg, #220555 30%, #EC2B7A 70%)',
        color: 'white',
        margin: 0,
        marginRight: theme.spacing(1.5),
        marginLeft: theme.spacing(1),
        transform: 'scale(2.5)'
    },
    radiusBorder: {
        borderRadius: '60px',
        maxWidth: '380px'
    },
    primary: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        borderRadius: '60px',
        'align-self': 'flex-end'
    }
}));



const AllowAccessPage = ({ match, history }) => {
    const classes = useStyles();

    const goToHomePage = () => {
        history.push('/home');
    }

    const goToLocationAccessPage = () => {
        history.push(`${match.url}/locationAccess`);
    }

    return (
        <Grid container item xs={12} sm={8} md={7} justify='center' alignItems='flex-end' color='primary' className={classes.bottomPadding}>
            <Grid container item xs={10} sm={9} md={6} direction='column' spacing={2} justify='center'>

                <AllowAccessPageButtons
                    label='Location Access'
                    icon={<LocationOnIcon fontSize='large' className={clsx([classes.rounded, classes.whiteBackground, classes.blackBorder])} />}
                    onClick={goToLocationAccessPage}
                />

                <Grid item container spacing={2} direction='column'>

                    <AllowAccessPageButtons
                        classes={[classes.gradientBackground]}
                        label='Allow Camera Access'
                        icon={< CameraAltIcon fontSize='large' className={clsx([classes.rounded, classes.whiteBackground])} />}
                    />

                    <AllowAccessPageButtons
                        classes={[classes.gradientBackground]}
                        label='Allow Storage Access'
                        icon={<SdStorageIcon fontSize='large' className={clsx([classes.rounded, classes.whiteBackground])} />}
                    />

                    <AllowAccessPageButtons
                        classes={[classes.gradientBackground]}
                        label='Allow Contact Access'
                        icon={<ContactsIcon fontSize='large' className={clsx([classes.rounded, classes.whiteBackground])} />}
                    />
                </Grid>

            </Grid>

            <Grid container xs={9} sm={7} md={7} item justify='center'>
                <Button
                    startIcon={<LocationOnIcon fontSize='large' className={clsx([classes.rounded, classes.pinkGradientBackground])} />}
                    variant='contained'
                    color='primary'
                    className={classes.radiusBorder}
                    fullWidth
                >
                    <Button fullWidth style={{ color: 'white' }} onClick={goToHomePage}>
                        <Typography variant='h6' component='h1'>
                            START
                        </Typography>
                    </Button>
                </Button>
            </Grid>

        </Grid>
    );
}

export default AllowAccessPage;