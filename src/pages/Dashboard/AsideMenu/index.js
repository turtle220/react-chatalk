import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import DashboardIcon from '@material-ui/icons/Dashboard';

import './index.css';
import logoImg from '../../../images/chatalk_logo.png';

export default function Asidemenu(props) {
    const [viewVal, setView] = useState('block');
    const toggleMenu = () => {
        props.toggleMenu(viewVal === 'none' ? 'block' : 'none');
        const delayTime = viewVal === 'block' ? 0 : 200;
        console.log(delayTime);
        setTimeout(() => {
            if (viewVal === 'block') {
                setView('none');
            } else {
                setView('block');
            }
        }, delayTime);
    };

    const linkAnim = (event) => {
        let element = event.target;
        while (element.classList[0] !== 'aside_link') element = element.parentNode;
        const linkArray = document.getElementsByClassName('aside_link');
        for (let index = 0; index < linkArray.length; index++) {
            const ele = linkArray[index];
            if (ele.classList.contains('active')) ele.classList.remove('active');
        }
        element.classList.add('active');
    };

    const dashClick = (event) => {
        const linkArray = document.getElementsByClassName('aside_link');
        for (let index = 0; index < linkArray.length; index++) {
            const ele = linkArray[index];
            if (ele.classList.contains('active')) ele.classList.remove('active');
        }
    };
    return (
        <>
            <div className="aside_brand_toggler" onClick={toggleMenu}>
                <span className="aside_spread" style={{ display: viewVal === 'none' ? 'block' : 'none' }}>
                    <MenuOpenIcon />
                </span>
                <span className="aside_fold" style={{ display: viewVal }}>
                    <MenuIcon />
                </span>
            </div>
            <div className="aside_menu" style={{ display: viewVal }}>
                <div className="aside_menu_brand">
                    <div className="menu_logo">
                        <Link to="/" className="link">
                            <img src={logoImg} alt="logo" className="aside_logo" />
                        </Link>
                    </div>
                </div>
                <div className="menu_dashboard">
                    <Link to="/dashboard" className="link" onClick={dashClick}>
                        <DashboardIcon style={{ verticalAlign: 'middle', marginTop: '-4px' }} />
                        &nbsp;&nbsp;<span>DASHBOARD</span>
                    </Link>
                </div>
                <div className="menu_data">
                    <h4>Data</h4>
                    <Link to="/dashboard" className="aside_link link ripple-btn" onClick={linkAnim}>
                        <AssessmentOutlinedIcon />
                        &nbsp;&nbsp;<span>View</span>
                    </Link>
                    <Link to="/dashboard" className="aside_link link ripple-btn" onClick={linkAnim}>
                        <FormatListBulletedIcon />
                        &nbsp;&nbsp;<span>Build</span>
                    </Link>
                </div>
                <div className="menu_network">
                    <h4>Network</h4>
                    <Link to="/dashboard/manage" className="aside_link link ripple-btn" onClick={linkAnim}>
                        <PeopleOutlineIcon />
                        &nbsp;&nbsp;<span>Manage</span>
                    </Link>
                    <Link to="/dashboard" className="aside_link link ripple-btn" onClick={linkAnim}>
                        <NotificationsNoneIcon />
                        &nbsp;&nbsp;<span>Notice</span>
                    </Link>
                </div>
            </div>
        </>
    );
}
