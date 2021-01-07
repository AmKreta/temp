import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    seconaryIconButton: {
        background: 'linear-gradient(90deg, rgba(43,190,200,1), rgba(29,233,182,1))',
        borderRadius: '20px'
    },
    buttonIcon: {
        transform: 'scale(2)'
    }
}));

const SecondaryIconButton = ({ label, children }) => {
    const classes = useStyles();
    return (
        <Button
            variant='contained'
            color='primary'
            startIcon={children}
            className={classes.seconaryIconButton}
        >
            <Typography variant='body1' component='h1'>
                {label}
            </Typography>
        </Button>
    );
}

export default SecondaryIconButton;

