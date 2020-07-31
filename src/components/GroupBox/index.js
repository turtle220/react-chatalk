import React from 'react';

import './index.css';

export default function GroupBox(props) {
    return (
        <div className="group-box" tabIndex={0} style={props.style}>
            {props.children}
        </div>
    );
}
