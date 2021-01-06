import React from 'react';
import { Grid, makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';


// customComponents
import LoginPage from './loginAndSignUpPage/loginPage.component';
import AskForPermission from './AskForPermission/askForPermission.component';

// creating style
const useStyles = makeStyles(theme => ({
    root: {
        height: '100%'
    }
}));

// modifying theme for theme provider
const newTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#220555'
        },
        secondary: {
            main: '#5C4BD1'
        }
    }
});


// This grid is the root grid with width = screenWidth , 
// it has no break points

const Components = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={newTheme}>
            <Grid container item xs={12} direction='row' justify='center' alignItems='' className={classes.root}>
                <Switch>
                    <Route exact path='/' component={LoginPage} />
                    <Route path='/AskForPermissionPage' component={AskForPermission} />
                </Switch>
            </Grid>
        </ThemeProvider>
    );
}

export default Components;
