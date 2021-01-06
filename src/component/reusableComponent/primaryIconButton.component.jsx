import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';

import '../globalStyle/globalStyles.scss';

const useStyles = makeStyles(theme => ({
    seconaryIconButton: {
        background: 'linear-gradient(90deg, rgba(43,190,200,1), rgba(29,233,182,1))',
    },
    buttonIcon: {
        transform: 'scale(2)'
    }
}));

const PrimaryButton = ({ label, children }) => {
    const classes = useStyles();
    return (
        <Button
            variant='contained'
            startIcon={children}
            className={classes.seconaryIconButton}
        >
            <Typography variant='body1' component='h1'>
                {label}
            </Typography>
        </Button>
    );
}

export defaut PrimaryButton;

