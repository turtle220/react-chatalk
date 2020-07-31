import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Popover from '@material-ui/core/Popover';

import './index.css';

export default function DashHeader(props) {
    const resetPassCallback = () => {
        console.log('resetPassword callback!!!');
    };

    const logOutCallback = () => {
        console.log('logoutPassword callback!!!');
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="dashheader">
            <div className="common_links">
                <div className="ripple-btn">
                    <Link to="/dashboard" className="link nav_link dash_link">
                        <SearchIcon className="nav_icon" />
                    </Link>
                </div>
                <div className="ripple-btn">
                    <Link to="/dashboard" className="link nav_link dash_link">
                        <NotificationsNoneIcon className="nav_icon" />
                    </Link>
                </div>
                <div className="ripple-btn">
                    <Link to="/dashboard/intro" className="link nav_link dash_link">
                        <HelpOutlineOutlinedIcon className="nav_icon" />
                    </Link>
                </div>
            </div>
            <div className="user_avatar">
                <div className="hello_para">
                    <p>Hi,&nbsp;{props.username}</p>
                </div>
                <div className="avatar_icon" onClick={handleClick}>
                    <AccountCircleIcon className="icon1" />
                </div>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    <ul className="inner_popover">
                        <li>
                            <button className="reset_password ripple-btn" onClick={resetPassCallback}>
                                Reset Password
                            </button>
                        </li>
                        <li>
                            <button className="log_out ripple-btn" onClick={logOutCallback}>
                                Log out
                            </button>
                        </li>
                    </ul>
                </Popover>
            </div>
        </div>
    );
}
