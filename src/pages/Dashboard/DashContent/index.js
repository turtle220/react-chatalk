import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashHeader from '../DashHeader';
import PatientBlock from '../PatientBlock';
import Checkin from '../Modals/Checkin/index';
import Survey from '../Modals/Survey/index';
import VideoIntro from '../VideoIntro';
import Management from '../Management';

import './index.css';

export default function DashContent(props) {
    return (
        <div className="dash_content">
            <DashHeader username="User" style={{ zIndex: 200 }} />
            <Switch>
                <Route path="/dashboard/intro" exact>
                    <VideoIntro />
                </Route>
                <Route path="/dashboard/manage" exact>
                    <Management />
                </Route>
                <Route path="/dashboard" exact>
                    <div className="dash_title">
                        <h3>Dashboard</h3>
                    </div>
                    <div className="patient_blocks">
                        <div>
                            <PatientBlock
                                title="Patient Check In Form"
                                today="10"
                                thisweek="50"
                                btnCap="Add Patient"
                                dialog={<Checkin />}
                            />
                        </div>
                        <div>
                            <PatientBlock
                                title="Patient Satisfaction Survey"
                                today="22"
                                thisweek="220"
                                btnCap="Conduct Survey"
                                dialog={<Survey />}
                            />
                        </div>
                    </div>
                </Route>
            </Switch>
        </div>
    );
}
