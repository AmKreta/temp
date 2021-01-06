import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    border: {
        border: '1px solid red'
    }
}));

const AskForPermission = () => {
    const classes = useStyles();
    return (
        <Grid container direction='column' item xs={12} sm={8} md={4} justify='center' spacing={2} color='primary' className={classes.border}>
            <Grid container item direction='column' spacing={3}>
                <Grid item className={classes.border}>
                    locationAccess
                </Grid>
                <Grid item className={classes.border}>
                    AllowCameraAccess
                    AllowStorageAccess
                    AllowContactAccess
                </Grid>
                <Grid item className={classes.border}>
                    Start
                </Grid>
            </Grid>
        </Grid>
    );
}

export default AskForPermission;
