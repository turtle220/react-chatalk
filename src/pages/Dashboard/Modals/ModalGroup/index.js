import React, { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import CheckboxTree from 'react-checkbox-tree';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useSelector } from 'react-redux';

import Modals from '../index';
import GroupBox from '../../../../components/GroupBox/index';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import './index.css';

export default function ModalGroup(props) {
    const groups = useSelector((state) => state.groups.value);
    const roles = useSelector((state) => state.roles.value);
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);

    const data = roles.map((role) => ({ label: role.name, value: role.id, showCheckbox: true, icon: null }));

    function handleCheck(arr, node) {
        setChecked(arr);
    }

    return (
        <div className="group_modal">
            <div className="modal_header">
                <span className="modal_title">
                    <p>Group</p>
                </span>
                <span
                    className="close_btn"
                    onClick={() => {
                        Modals.close('.group_modal');
                    }}
                >
                    <CloseOutlinedIcon className="icon" />
                </span>
            </div>
            <div className="modal_content">
                <table width="480" height="100%">
                    <tbody>
                        <tr height="60">
                            <td width="240" valign="top">
                                <TextField
                                    label="Group Name"
                                    style={{ margin: 8 }}
                                    placeholder="Group Name"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    variant="outlined"
                                />
                            </td>
                            <td width="300" height="210" rowSpan="2" valign="top">
                                <div style={{ paddingLeft: 20, height: 200 }}>
                                    <label
                                        className="group-label MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined"
                                        data-shrink="true"
                                    >
                                        Allow Roles
                                    </label>
                                    <GroupBox>
                                        <br></br>
                                        {data.length > 0 ? (
                                            <CheckboxTree
                                                nodes={data}
                                                checked={checked}
                                                expanded={expanded}
                                                onCheck={handleCheck}
                                                onExpand={(checkedArr) => setExpanded(checkedArr)}
                                                iconsClass="fa5"
                                            />
                                        ) : (
                                            <CircularProgress style={{ marginTop: 60, marginLeft: 120 }} />
                                        )}
                                    </GroupBox>
                                </div>
                            </td>
                        </tr>
                        <tr height="150">
                            <td valign="top">
                                <TextField
                                    label="Description"
                                    style={{ margin: 8 }}
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
                            </td>
                        </tr>

                        <tr>
                            <td>
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
                            <td>
                                <label
                                    className="group-label MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined"
                                    data-shrink="true"
                                    style={{ marginLeft: '25px', marginTop: '18px' }}
                                >
                                    &nbsp;Insert Into Group&nbsp;
                                </label>
                                <GroupBox style={{ height: '53px', width: '94%', marginLeft: '25px' }}>
                                    <NativeSelect
                                        className="role-select"
                                        id="demo-customized-select-native"
                                        value={'groupId'}
                                        onChange={'onGroupChanged'}
                                        variant="outlined"
                                        label="Select Role"
                                        style={{ border: 'none !important', backgroundColor: '#FFFFFF00' }}
                                    >
                                        {groups.map((group) => (
                                            <option value={group.group_id} key={group.group_id}>
                                                {group.group_name}
                                            </option>
                                        ))}
                                    </NativeSelect>
                                </GroupBox>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <div className="btn_container">
                                    <button
                                        className="cancel_btn ripple-btn"
                                        onClick={() => {
                                            Modals.close('.group_modal');
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
