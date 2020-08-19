import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, Button } from "@material-ui/core";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MinimizeIcon from '@material-ui/icons/Minimize';
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div>
                <img className="header__image" src="https://raw.githubusercontent.com/zreecespieces/material-ui-course-create-react-app/0c91cb4fb64a8639fb75d4e2b9310f77057fa9d3/src/assets/logo.svg" alt="" />
            </div>
            <div className="header__home">
                <HomeIcon className="header__homeicon" />
            </div>
        
            <div className="header__main">
                <h4>Main Stream</h4>
            </div>
            <div className="header__search">
                <SearchIcon />
            </div>
            <div>
            <Button className="haeder__button" variant="outlined" >
                    <h4>Create Scene</h4>
            </Button> 
            </div>
            <div className="header__notify">
                <NotificationsNoneIcon />
            </div>
            <div className="header__username">
                <h4>username</h4>
                <Avatar src="https://pbs.twimg.com/profile_images/1052233810375512065/mkVpI6Np_400x400.jpg" />

            </div>
        </div>
    )
}

export default Header
