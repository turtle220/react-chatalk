import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function Footer(props) {
    return (
        <div className="footer">
            <span className="menu">
                <Link to="/" className="link">
                    CHATalkMD
                </Link>{' '}
                &nbsp;|&nbsp;&nbsp;
            </span>
            <span className="corpspan">The Research Corp &nbsp; ©</span>
        </div>
    );
}
