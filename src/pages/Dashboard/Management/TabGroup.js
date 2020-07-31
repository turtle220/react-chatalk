import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import CheckboxTree from 'react-checkbox-tree';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';

import Utils from '../../../utils';
import './index.css';

export default function TabGroup(props) {
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const groups = useSelector((state) => state.groups.value);
    const [currentGroup, setCurrentGroup] = useState(null);

    function handleCheck(arr, node) {
        setChecked([node.value]);
        groups.forEach((group) => {
            if (group.group_id.toString() === node.value) setCurrentGroup(group);
        });
    }
    const data = Utils.makeTree(
        groups.map((group) => ({
            ...group,
            label: group.group_name,
            value: group.group_id + ''
        })),
        'group_id',
        'group_parent_id'
    );
    useEffect(() => {}, []);
    return (
        <div className="tab-content">
            <table width="100%" height="100%" style={{ padding: 20 }}>
                <tbody height="100%">
                    <tr>
                        <td width="20%" valign="bottom" align="left">
                            &nbsp;&nbsp;&nbsp;&nbsp;Select Group
                        </td>
                        <td style={{ paddingLeft: 20 }} height="30"></td>
                    </tr>
                    <tr>
                        <td style={{ padding: 10 }}>
                            <Paper className="" style={{ width: '100%', height: '100%', position: 'relative', minWidth: 200 }}>
                                <CheckboxTree
                                    checkModel="all"
                                    noCascade
                                    nodes={data}
                                    checked={checked}
                                    expanded={expanded}
                                    onCheck={handleCheck}
                                    onExpand={(arr, leaf) => setExpanded(arr)}
                                    iconsClass="fa5"
                                />
                            </Paper>
                        </td>
                        <td style={{ padding: 10 }}>
                            <Paper className="" style={{ width: '100%', height: '100%', position: 'relative' }}>
                                <div className="modal_content">
                                    <table width="100%" height="100%">
                                        <tbody>
                                            <tr height="60">
                                                <td width="100%" valign="top">
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
                                                        value={currentGroup ? currentGroup.group_name : ''}
                                                    />
                                                </td>
                                            </tr>
                                            <tr height="60">
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
                                            </tr>
                                            <tr style={{ height: '30vh' }}>
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
                                                        rows={8}
                                                        value={currentGroup ? currentGroup.group_description : ''}
                                                    />
                                                    <div className="btn_container">
                                                        <button className="submit_btn ripple-btn">Update</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Paper>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const columns = [
    { field: 'identification', title: 'Name' },
    { field: 'role', title: 'Role' },
    { field: 'group', title: 'Groups' /*, align: 'left' ,format: (value) => value.toLocaleString('en-US'),*/ },
    { field: 'category', title: 'Tags' /*, align: 'right' , minWidth: 170, format: (value) => value.toLocaleString('en-US'),*/ },
    { field: 'created_datetime', title: 'Signup', format: (value) => (value.toDateString ? value.toDateString() : '') },
    { field: 'updated_datetime', title: 'Last Login', format: (value) => (value.toDateString ? value.toDateString() : '') },
    {
        field: 'status',
        title: 'Status',
        align: 'center',
        format: (value) =>
            value !== 0 ? <span style={{ color: '#33AA33' }}>Active</span> : <span style={{ color: '#AA8833' }}>Disable</span>
    },
    {
        field: 'action',
        title: 'Action',
        minWidth: 76,
        align: 'center',
        format: (value) => (
            <>
                <IconButton aria-label="delete" style={{ padding: 5 }} color="secondary" style={{ outline: 'none' }}>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="edit" style={{ padding: 5 }} color="primary" style={{ outline: 'none' }}>
                    <EditIcon />
                </IconButton>
            </>
        )
    }
];
