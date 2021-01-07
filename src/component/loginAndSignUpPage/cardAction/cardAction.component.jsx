import React, { useState } from 'react';
import { Grid, CardActions, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

const CardActionComponent = () => {
    const [isButtonClicked, setisButtonClicked] = useState(false);
    const redirectToAskPermissionPage = (e) => {
        setisButtonClicked(prevState => !prevState.isButtonClicked);
    }
    if (isButtonClicked) {
        return <Redirect to='/allowAccess' />
    }
    else {
        return (
            <Grid item>
                <CardActions>
                    <Button
                        variant='contained'
                        color='primary'
                        fullWidth
                        onClick={redirectToAskPermissionPage}
                    >
                        Sign In
                    </Button>
                </CardActions>
            </Grid>
        );
    }
}

export default CardActionComponent;