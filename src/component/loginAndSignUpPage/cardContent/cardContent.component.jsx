import React from 'react';
import { Grid, CardContent, TextField } from '@material-ui/core';

// customComponent
import OtpInput from './otpInput/optInput.component';


const CardContentComponent = ({ timer, showOtpComponent, setShowOtpcomponent, name, phoneNO, otp, setName, setPhoneNo, setOtp }) => {
    return (
        <Grid container item>
            <CardContent>
                <Grid container direction='column' spacing={3}>
                    <Grid item >
                        <TextField
                            variant='outlined'
                            fullWidth
                            value={name}
                            onChange={setName}
                            inputProps={{
                                placeholder: 'NAME'
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            variant='outlined'
                            fullWidth
                            value={phoneNO}
                            onChange={setPhoneNo}
                            inputProps={{
                                placeholder: 'MOBILE NUMBER',
                                maxLength: 10
                            }}
                        />
                    </Grid>
                    <Grid container item direction='column' spacing={2}>
                        <OtpInput timer={timer} otp={otp} setOtp={setOtp} showOtpComponent={showOtpComponent} />
                    </Grid>

                </Grid>
            </CardContent>
        </Grid>
    );
}

export default CardContentComponent;