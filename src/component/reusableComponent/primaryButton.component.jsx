import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    primaryButton: {
        background: 'linear-gradient(90deg, rgba(43,190,200,1), rgba(29,233,182,1))',
        color: 'white'
    },
    buttonIcon: {
        transform: 'scale(2)'
    }
}));

const PrimaryButton = ({ label, children, onClick }) => {
    const classes = useStyles();
    return (
        <Button
            variant='contained'
            startIcon={children}
            className={classes.primaryButton}
            fullWidth
            onClick={onClick}
        >
            <Typography variant='body1' component='h1'>
                {label}
            </Typography>
        </Button>
    );
}

export default PrimaryButton;

