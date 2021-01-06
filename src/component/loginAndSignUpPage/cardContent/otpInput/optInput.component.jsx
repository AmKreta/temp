import React from 'react';
import { Grid, TextField, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    acctiveOtpInput: {
        opacity: 1,
        transition: 'opacity .5s ease-in-out'
    },
    inactiveOtpInput: {
        opacity: .4
    }
}));

const OtpCell = ({ val, setOtp, index, showOtpComponent }) => {
    const inputValueInOtpContainer = (e) => {
        setOtp(e.target.value, index);
    }

    return (
        <Grid item xs={2}>
            <TextField
                variant='outlined'
                fullWidth
                value={val}
                onChange={inputValueInOtpContainer}
                disabled={!showOtpComponent}
                inputProps={{
                    maxLength: 1,
                    style: { textAlign: 'center' }
                }}
            />
        </Grid>
    );
}


const OtpInput = ({ timer, otp, setOtp, showOtpComponent }) => {

    const classes = useStyles();

    return (
        <Grid container justify='center' spacing={1} className={showOtpComponent ? classes.acctiveOtpInput : classes.inactiveOtpInput}>
            <Grid container item xs={11} justify='flex-start'>
                <Typography variant='body1' component='h5'>
                    <span>Enter Sms Code / OTP </span>
                </Typography>
            </Grid>
            <Grid container item xs={11} spacing={1} direction='row'>
                <OtpCell val={otp[0]} setOtp={setOtp} index={0} showOtpComponent={showOtpComponent} />
                <OtpCell val={otp[1]} setOtp={setOtp} index={1} showOtpComponent={showOtpComponent} />
                <OtpCell val={otp[2]} setOtp={setOtp} index={2} showOtpComponent={showOtpComponent} />
                <OtpCell val={otp[3]} setOtp={setOtp} index={3} showOtpComponent={showOtpComponent} />
                <OtpCell val={otp[4]} setOtp={setOtp} index={4} showOtpComponent={showOtpComponent} />
                <OtpCell val={otp[5]} setOtp={setOtp} index={5} showOtpComponent={showOtpComponent} />
            </Grid>
            <Grid container item xs={11} justify='flex-end'>
                <Typography variant='body1' component='h5'>
                    <span>Resend in {timer.min}:{timer.sec >= 10 ? timer.sec : `0${timer.sec}`}</span>
                </Typography>
            </Grid>
        </Grid>
    );
}

export default OtpInput;