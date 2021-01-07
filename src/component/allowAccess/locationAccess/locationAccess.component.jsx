import React from 'react';
import './locationAccessComponent.styles.scss';
import { Grid, Card, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';

const locationAccess = () => {
    return (
        <Grid item container xs={12} sm={8} md={5} alignItems='flex-start' style={{ backgroundColor: 'red' }}>
            <Grid item style={{ backgroundColor: 'yellow' }}>
                <Card>
                    <CardContent>
                        <Grid container item style={{ backgroundColor: 'green' }}>
                            <Grid container item>
                                <Grid item>
                                    <Typography>
                                        Search
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <IconButton>
                                        <CloseIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid container item>
                                <Grid item>
                                    <IconButton>
                                        <GpsFixedIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        Select Current Location
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <TextField fullWidth variant='filled' inputProps={{ placeholder: 'Enter Pin Code Or City Name' }} ></TextField>
                        </Grid>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
            </Grid>
        </Grid >
    );
}

export default locationAccess;