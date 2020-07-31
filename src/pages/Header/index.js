import React from 'react';
import { Link } from 'react-router-dom';
import HouseOutlinedIcon from '@material-ui/icons/HouseOutlined';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

import './index.css';
import logo from '../../images/chatalk_logo.png';

export default function Header(props) {
    return (
        <div className="navbar">
            <Link to="/" className="link">
                <img src={logo} alt="logo" className="logo" />
            </Link>
            <div className="navigation">
                <Link to="/dashboard" className="link nav_link">
                    <DashboardOutlinedIcon className="icon" />
                    <span> &nbsp;&nbsp;Dashboard </span>
                </Link>
                <Link to="/" className="link nav_link">
                    {' '}
                    <HouseOutlinedIcon className="icon" />
                    <span> &nbsp;&nbsp; Home </span>
                </Link>
                <Link to="/login" className="link nav_link">
                    {' '}
                    <PeopleOutlineIcon className="icon" />
                    <span> &nbsp;&nbsp;Login </span>
                </Link>
            </div>
        </div>
    );
}
