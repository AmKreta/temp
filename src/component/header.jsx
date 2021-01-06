import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";

const useStyles = makeStyles({
    TypograpgyStyle: {
        flex: 1,
        textAlign: 'left'
    }
});

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='header' className={classes.TypograpgyStyle}>
                    <h1>
                        This Is Our Header
                    </h1>
                </Typography>
                <AcUnitRoundedIcon />
            </Toolbar>
        </AppBar>
    );
}

export default Header;