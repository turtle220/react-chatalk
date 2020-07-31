import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import NativeSelect from '@material-ui/core/NativeSelect';

import CustomizedAccordions from '../../../../components/Accordian';
import Modals from '../index';
import './index.css';

/**
 * @summary ModalRole functional component: Add/Modify Role Object
 * @param {*} props
 * @returns ModalRole React DOM
 */
export default function ModalRole(props) {
    const groups = useSelector((state) => state.groups.value);
    const [groupId, setGroupId] = useState(0);

    function onGroupChanged(e) {
        setGroupId(e.target.value);
    }
    const permissions = [
        {
            id: '0',
            label: 'Dashboard',
            children: [
                { id: '1', label: 'Add Patient', action: '', enable: false },
                { id: '2', label: 'Conduct Survey', action: '', enable: false },
                { id: '3', label: 'View Wait Time', action: '', enable: false },
                { id: '4', label: 'View Group FeedBack', action: '', enable: false },
                { id: '5', label: 'Add Event', action: '', enable: false },
                { id: '6', label: 'Delete Event', action: '', enable: false }
            ]
        },
        {
            id: '10',
            label: 'Data -> View',
            children: [
                { id: '11', label: 'Add Patient', action: '', enable: false },
                { id: '12', label: 'Conduct Survey', action: '', enable: false },
                { id: '13', label: 'View Wait Time', action: '', enable: false },
                { id: '14', label: 'View Group FeedBack', action: '', enable: false },
                { id: '15', label: 'Add Event', action: '', enable: false },
                { id: '16', label: 'Delete Event', action: '', enable: false }
            ]
        },
        {
            id: '20',
            label: 'Data -> Build',
            children: [
                { id: '21', label: 'Add Patient', action: '', enable: false },
                { id: '22', label: 'Conduct Survey', action: '', enable: false },
                { id: '23', label: 'View Wait Time', action: '', enable: false },
                { id: '24', label: 'View Group FeedBack', action: '', enable: false },
                { id: '25', label: 'Add Event', action: '', enable: false },
                { id: '26', label: 'Delete Event', action: '', enable: false }
            ]
        },
        {
            id: '30',
            label: 'Network -> View',
            children: [
                { id: '31', label: 'Add Patient', action: '', enable: false },
                { id: '32', label: 'Conduct Survey', action: '', enable: false },
                { id: '33', label: 'View Wait Time', action: '', enable: false },
                { id: '34', label: 'View Group FeedBack', action: '', enable: false },
                { id: '35', label: 'Add Event', action: '', enable: false },
                { id: '36', label: 'Delete Event', action: '', enable: false }
            ]
        }
    ];
    return (
        <div className="role_modal">
            <div className="modal_header">
                <span className="modal_title">
                    <p>Role</p>
                </span>
                <span
                    className="close_btn"
                    onClick={() => {
                        Modals.close('.role_modal');
                    }}
                >
                    <CloseOutlinedIcon className="icon" />
                </span>
            </div>
            <div className="modal_content">
                <table width="795" height="100%">
                    <tbody>
                        <tr>
                            <td width="340" valign="top">
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                    <TextField
                                        label="Role Name"
                                        style={{ margin: 8, width: '100%' }}
                                        placeholder="Insert role name here."
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        variant="outlined"
                                    />
                                    <TextField
                                        label="Description"
                                        style={{ margin: 8, width: '100%' }}
                                        placeholder="Description"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        variant="outlined"
                                        multiline
                                        rows={5}
                                    />
                                    <label
                                        className="group-label MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined"
                                        data-shrink="true"
                                    >
                                        &nbsp;Insert Into Group&nbsp;
                                    </label>
                                    <div className="group-box" tabIndex={0} style={{ width: 320, height: 50 }}>
                                        <NativeSelect
                                            className="role-select"
                                            id="demo-customized-select-native"
                                            value={groupId}
                                            onChange={onGroupChanged}
                                            variant="outlined"
                                            label="Select Role"
                                            style={{ width: 280, border: 'none !important', backgroundColor: '#FFFFFF00' }}
                                        >
                                            {groups.map((group) => (
                                                <option value={group.group_id} key={group.group_id}>
                                                    {group.group_name}
                                                </option>
                                            ))}
                                        </NativeSelect>
                                    </div>
                                </div>
                            </td>
                            <td width="450" valign="top">
                                <div style={{ paddingLeft: 20, height: 275 }}>
                                    <label
                                        className="group-label MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined"
                                        data-shrink="true"
                                    >
                                        Permissions
                                    </label>
                                    <div className="group-box" tabIndex={0}>
                                        <br></br>
                                        <CustomizedAccordions data={permissions} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <TextField
                                    label="Tag(s)"
                                    style={{ margin: 8 }}
                                    placeholder="Tag(s)"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    variant="outlined"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <div className="btn_container">
                                    <button
                                        className="cancel_btn ripple-btn"
                                        onClick={() => {
                                            Modals.close('.user_modal');
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button className="submit_btn ripple-btn">submit</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
