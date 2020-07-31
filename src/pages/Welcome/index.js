import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import checkLogin from '../CheckLogin';

import './index.css';
import apartImg from '../../images/apartment.png';
import groupImg from '../../images/group.png';
export default function Welcome(props) {
    const [userName, setUserName] = useState('');
    const history = useHistory();
    const user_session = useSelector((state) => state.user_session);
    useEffect(() => {
        checkLogin(history, user_session);
    }, [history, user_session]);
    return (
        <div className="welcome">
            <div className="main_content">
                <div className="inner_content">
                    <div className="inner_welcome">
                        <h2>
                            {userName === '' ? 'Wecome!' : 'Welcome, '}
                            <span>{userName}</span>
                        </h2>
                        <div className="group_container">
                            <div className="group">
                                <div className="group_btn">
                                    <img src={apartImg} alt=""></img>
                                </div>
                                <p>Group 1</p>
                            </div>
                            <div className="group">
                                <div className="group_btn">
                                    <img src={apartImg} alt=""></img>
                                </div>
                                <p>Group 2</p>
                            </div>
                            <div className="group">
                                <div className="group_btn">
                                    <img src={groupImg} alt=""></img>
                                </div>
                                <p>Group 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
