import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// reusable components
import SecondaryIconButton from '../../reusableComponent/secondaryIconButton.component';

const LoginPageFooter = () => {
    return (
        <Grid container item direction='column' xs={12} spacing={2}>
            <Grid item>
                <SecondaryIconButton label='STORE LOGIN' >
                    <AccountCircleIcon />
                </SecondaryIconButton>
            </Grid>
            <Grid item>
                <Grid item>
                    <Typography color='primary' component='h4' variant='body2'>
                        Or
                    </Typography>
                </Grid>
                <Grid item >
                    <Button >
                        <Typography color='secondary' component='h4' variant='body2'>
                            Setup Your Store Here
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default LoginPageFooter;