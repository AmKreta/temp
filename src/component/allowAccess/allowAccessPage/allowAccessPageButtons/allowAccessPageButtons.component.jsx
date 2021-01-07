import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';


const AllowAccessButtons = ({ classes, label, icon }) => {
    return (
        <Grid container item direction='row' alignItems='center' justify='flex-start' className={clsx(classes)} >
            <Grid item >
                {icon}
            </Grid>
            <Grid item>
                <Typography variant='h6' component='h1' >
                    {label}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default AllowAccessButtons;