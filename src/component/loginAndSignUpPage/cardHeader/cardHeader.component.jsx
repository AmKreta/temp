import React from 'react';
import { Grid } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// reusable button
import SecondaryIconButton from '../../reusableComponent/secondaryIconButton.component';


const CardHeaderComponent = () => { 
return (
    <Grid item xs={12} >
        <SecondaryIconButton label='User Login' >
            <AccountCircleIcon />
        </SecondaryIconButton>
    </Grid>
);
}

export default CardHeaderComponent;