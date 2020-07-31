import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import checkLogin from '../CheckLogin';
import './index.css';
import Asidemenu from './AsideMenu';
import DashContent from './DashContent';

export default function Dashboard(props) {
    const history = useHistory();
    const user_session = useSelector((state) => state.user_session);
    useEffect(() => {
        checkLogin(history, user_session);
    }, [history, user_session]);

    const toggleMenu = (viewVal) => {
        if (viewVal === 'none') {
            document.getElementsByClassName('aside')[0].classList = 'aside aside_hidden';
        } else {
            document.getElementsByClassName('aside')[0].classList = 'aside aside_show';
        }
    };
    return (
        <div className="dashboard">
            <div className="aside aside_show">
                <Asidemenu toggleMenu={toggleMenu} />
            </div>
            <div className="main">
                <DashContent />
            </div>
        </div>
    );
}
