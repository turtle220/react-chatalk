import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import NativeSelect from '@material-ui/core/NativeSelect';
import CircularProgress from '@material-ui/core/CircularProgress';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import CheckboxTree from 'react-checkbox-tree';

import Modals from '../index';
import Utils from '../../../../utils';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import './index.css';

export default function ModalUser(props) {
    const groups = useSelector((state) => state.groups.value);
    const roles = useSelector((state) => state.roles.value);
    const [groupChecked, setGroupChecked] = useState([]);
    const [groupExpanded, setGroupExpanded] = useState([]);
    const [isOverrideUserName, setIsOverrideUserName] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [roleId, setRoleId] = useState(-1);
    const userIdCheckingStatus = useSelector((state) => state.users.userIdCheckingStatus);
    const dispatch = useDispatch();

    const data = Utils.makeTree(
        groups.map((group) => ({
            ...group,
            label: group.group_name,
            value: group.group_id + ''
        })),
        'group_id',
        'group_parent_id'
    );

    function onGroupChecked(arr, node) {
        setGroupChecked(arr);
    }

    function onRoleChanged(e) {
        setRoleId(e.target.value);
    }

    function onUserIdChange(e) {
        dispatch({ type: 'USERID_CHECK_START', value: e.target.value });
    }

    const onCheckOverrideUserName = (event) => {
        setIsOverrideUserName(event.target.checked);
    };
    return (
        <div className="user_modal">
            <div className="modal_header">
                <span className="modal_title">
                    <p>User</p>
                </span>
                <span
                    className="close_btn"
                    onClick={() => {
                        Modals.close('.user_modal');
                    }}
                >
                    <CloseOutlinedIcon className="icon" />
                </span>
            </div>
            <div className="modal_content">
                <table width="680" height="100%">
                    <tbody>
                        <tr height="60">
                            <td width="440" valign="top">
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                    <TextField
                                        label="First Name"
                                        style={{ margin: 8, width: '45%' }}
                                        placeholder="First Name"
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        onChange={(event) => {
                                            setFirstName(event.target.value);
                                        }}
                                        variant="outlined"
                                    />
                                    <TextField
                                        label="Middle Name"
                                        style={{ margin: 8, width: '45%' }}
                                        placeholder="Middle Name"
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        variant="outlined"
                                    />
                                    <TextField
                                        label="Last Name"
                                        style={{ margin: 8, width: '100%' }}
                                        placeholder="Middle Name"
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        onChange={(event) => {
                                            setLastName(event.target.value);
                                        }}
                                        variant="outlined"
                                    />
                                    <TextField
                                        label="Email"
                                        style={{ margin: 8, width: '100%' }}
                                        placeholder="user@example.com"
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        variant="outlined"
                                    />
                                </div>
                            </td>
                            <td width="300" valign="top">
                                <div style={{ paddingLeft: 20, height: 198 }}>
                                    <label
                                        className="group-label MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined"
                                        data-shrink="true"
                                    >
                                        Group Access
                                    </label>
                                    <div className="group-box" tabIndex={0}>
                                        <br></br>
                                        {data.length > 0 ? (
                                            <CheckboxTree
                                                nodes={data}
                                                checked={groupChecked}
                                                onCheck={onGroupChecked}
                                                expanded={groupExpanded}
                                                onExpand={(arr) => setGroupExpanded(arr)}
                                                iconsClass="fa5"
                                            />
                                        ) : (
                                            <CircularProgress style={{ marginTop: 60, marginLeft: 120 }} />
                                        )}
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                    {isOverrideUserName ? (
                                        <TextField
                                            label="User Identification"
                                            style={{ margin: 8, width: '85%' }}
                                            placeholder="Identification"
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            onChange={onUserIdChange}
                                            variant="outlined"
                                        />
                                    ) : (
                                        <TextField
                                            label="User Identification"
                                            style={{ margin: 8, width: '85%' }}
                                            placeholder="Identification"
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            disabled
                                            variant="outlined"
                                            onChange={onUserIdChange}
                                            value={firstName.substr(0, 1) + lastName}
                                        />
                                    )}
                                    {userIdCheckingStatus === 'checking' ? (
                                        <CircularProgress style={{ marginTop: 20, marginRight: 8, width: 30, height: 30 }} />
                                    ) : userIdCheckingStatus === 'notExists' ? (
                                        <DoneOutlineIcon
                                            style={{ marginTop: 20, marginRight: 8, width: 30, height: 30, color: '#44CC44' }}
                                        />
                                    ) : (
                                        <ErrorOutlineOutlinedIcon
                                            style={{ marginTop: 20, marginRight: 8, width: 30, height: 30, color: '#FF8822' }}
                                        />
                                    )}
                                </div>
                            </td>
                            <td valign="top">
                                <div style={{ paddingLeft: 20, height: 50 }}>
                                    <label
                                        className="group-label MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined"
                                        data-shrink="true"
                                    >
                                        Select Role
                                    </label>
                                    <div className="group-box" tabIndex={0}>
                                        <NativeSelect
                                            className="role-select"
                                            id="demo-customized-select-native"
                                            value={roleId}
                                            onChange={onRoleChanged}
                                            variant="outlined"
                                            label="Select Role"
                                        >
                                            {roles.map((role) => (
                                                <option value={role.id} key={role.id}>
                                                    {role.name}
                                                </option>
                                            ))}
                                        </NativeSelect>
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
                                    <FormControlLabel
                                        control={<Checkbox onChange={onCheckOverrideUserName} color="primary" />}
                                        style={{ margin: '0 auto', marginLeft: '1px' }}
                                        label="Override Username"
                                    />

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
