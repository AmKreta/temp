import React from 'react';
import './header.styles.scss';

import { IconButton, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

/*
    **different headers will be rendered acc to different active pages
    **use  class purpleAppHeader and whiteAppHeader for different Header Colors
*/

const Header = ({ activePage, currentLocation, currentUser }) => {
    return (
        <header className="appHeader">
            <IconButton>
                <SearchIcon />
            </IconButton>
            <Button endIcon={<ExpandMoreIcon />}>
                current Location
            </Button>
            <IconButton>
                <AccountCircleIcon />
            </IconButton>
        </header>
    );
}

export default Header;