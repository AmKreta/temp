import React from 'react';


//material ui imports
import { Grid, withStyles } from '@material-ui/core';
import { Card } from '@material-ui/core';


// custom components
import CardHeaderComponent from './cardHeader/cardHeader.component';
import CardContentComponent from './cardContent/cardContent.component';
import CardActionComponent from './cardAction/cardAction.component';
import LoginPageFooter from './loginPageFooter/loginPageFooter.component';

//custom functions
import fetchCall from '../fetchCall/fetchCall';

//creating styles
const styles = theme => ({
    loginPage: {
        padding: theme.spacing(1)
    },
    enterInfoCard: {
        padding: `${theme.spacing(2)}px 0`
    }
});



// creating component
class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: { min: 2, sec: 0 },
            name: '',
            phoneNo: '',
            showOtpComponent: false,
            otp: ['', '', '', '', '', ''],
            isVarifiedByServer: false
        };
        // contains object returned by setInterval for the otp countdown
        this.timerInterval = null;
    }

    setName = e => {
        this.setState({ name: e.target.value });
    }

    setPhoneNo = e => {
        /*if (false) {
            //check for validation
        }
        else {

        }*/
        this.setState({ phoneNo: e.target.value }, () => {
            if (!this.timerInterval && this.state.phoneNo.length === 10) {
                this.setShowOtpComponentTrue();
                this.timerInterval = setInterval(() => {
                    // setting timer after entering phone number
                    this.setState(prevState => {
                        if (prevState.timer.min === 0 && prevState.timer.sec === 0) {
                            clearInterval(this.timerInterval);
                            this.timerInterval = null;
                        }
                        else if (prevState.timer.sec === 0) {
                            return ({ timer: { min: prevState.timer.min - 1, sec: 59 } });
                        }
                        else {
                            return ({ timer: { min: prevState.timer.min, sec: prevState.timer.sec - 1 } });
                        }
                    });
                }, 1000);
            }
        });
    }

    setOtp = (value, index) => {
        let tempOtp = this.state.otp;
        tempOtp[index] = value;
        this.setState({ otp: tempOtp });
    }

    setShowOtpComponentTrue = (e) => {
        this.setState({
            showOtpComponent: true
        });
    }

    verificationProcess = () => {
        let endPointForSignInVerification = '';
        let method = 'get';
        let requestBody = {
            name: this.state.name,
            phoneNO: this.state.phoneNO,
            otp: this.state.otp
        }
        fetchCall(endPointForSignInVerification, method, requestBody);
    }

    componentDidMount() {

    }

    render() {
        const { classes } = this.props;
        return (

            <Grid container item xs={12} sm={8} md={4} justify='center' alignItems='stretch' className={classes.loginPage}>
                <Grid item xs={12}>
                    <Card className={classes.enterInfoCard}>
                        <Grid container item direction='column' spacing={1} alignItems='stretch'>
                            <CardHeaderComponent />
                            <CardContentComponent
                                timer={this.state.timer}
                                showOtpComponent={this.state.showOtpComponent}
                                setShowOtpComponentTrue={this.setShowOtpComponentTrue}
                                name={this.state.name}
                                phoneNo={this.state.phoneNo}
                                otp={this.state.otp}
                                setName={this.setName}
                                setPhoneNo={this.setPhoneNo}
                                setOtp={this.setOtp}
                            />
                            <CardActionComponent />
                        </Grid>
                    </Card>
                </Grid>
                <LoginPageFooter />
            </Grid>

        );
    }
    componentWillUnmount() {

        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

    }
}

export default withStyles(styles)(LoginPage);