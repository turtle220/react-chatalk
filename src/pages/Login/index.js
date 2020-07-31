import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import './index.css';
import checkLogin from '../CheckLogin';

const dummyLogin = (username, userpass) => {
    return new Promise((resolve, reject) => {
        if (userpass !== 'password') reject('Invalid user name and password.');
        else
            setTimeout(() => {
                resolve({
                    userid: 1,
                    username: username,
                    role: 0,
                    token: '!@#$%^&*()WERTYUIXCVBsadjgduasgd',
                    login: true
                });
            }, 2000);
    });
};

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const session = useSelector((state) => state.user_session);
    const history = useHistory();
    useEffect(() => {
        if (checkLogin(history, session)) {
            console.log('login success');
            history.push('welcome');
        }
    }, [history, session]);

    const dispatch = useDispatch();
    const login = (e) => {
        dispatch({ type: 'USER_LOGIN', value: { email: username, password } });
    };
    const forgotPassword = (e) => {
        e.preventDefault();
        console.log('Forgot password clicked.');
    };

    return (
        <div className="login">
            <div className="main_content">
                <div className="inner_content">
                    {/* <div className="avatar">
                        <AccountCircleIcon className="login_icon" />
                    </div> */}
                    <div className="inner_login">
                        <div className="landing_logo">
                            <p>
                                <span>CHA</span>Talk
                            </p>
                        </div>
                        <div className="edit_container">
                            <TextField
                                id="outlined-basic"
                                label="Username"
                                variant="outlined"
                                className="inputUserName"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                type="password"
                                variant="outlined"
                                className="inputPassword"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="button_container">
                                <button type="button" className="login_btn btn ripple-btn" onClick={login}>
                                    Log in
                                </button>
                                <a className="forgot" onClick={forgotPassword} href="*">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="welcome_post">
                    <div className="inner_post">
                        <div className="post_title">
                            <p>Welcome to the CHATalk Dashboard!</p>
                        </div>
                        <div className="post_description">
                            <p>Powerful and professional admin template for Web Applications, CRM, CMS, Admin Panels and more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
