import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

import Modals from '../Modals';
import './index.css';

function HeadIcon(props) {
    if (props.title === 'Patient Check In Form') {
        return <AccountCircleIcon className="icon" />;
    } else {
        return <DescriptionOutlinedIcon className="icon" />;
    }
}
export default function PatientBlock(props) {
    return (
        <div className="patient_block">
            <div className="block_header">
                <span>
                    <HeadIcon title={props.title} />
                </span>
                <span className="block_title">{props.title}</span>
                <span className="setting_icon">
                    <SettingsIcon className="icon" />
                </span>
            </div>
            <div className="counter">
                <div className="today">
                    <p className="number">{props.today}</p>
                    <p className="label">Today</p>
                </div>
                <div className="this_week">
                    <p className="number">{props.thisweek}</p>
                    <p className="label">This week</p>
                </div>
            </div>
            <div className="btn_div">
                <button className="block_btn ripple-btn" onClick={() => Modals.show(props.dialog)}>
                    {props.btnCap}
                </button>
            </div>
        </div>
    );
}
