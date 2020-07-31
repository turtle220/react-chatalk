import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import CheckboxTree from 'react-checkbox-tree';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PerfectScrollbar from 'perfect-scrollbar';

import User from '../../../models/User';
import Utils from '../../../utils';
import './index.css';

export default function TabUser(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const users = useSelector((state) => state.users.value);
    const groups = useSelector((state) => state.groups.value);
    const roles = useSelector((state) => state.roles.value);
    console.log(users);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    function handleCheck(arr, node) {
        setChecked([node.value]);
        // console.log(arr, node)
    }
    const data = Utils.makeTree(
        groups.map((group) => ({
            ...group,
            label: group.group_name,
            value: group.group_id + ''
            // showCheckbox: true,
            // icon: null,
        })),
        'group_id',
        'group_parent_id'
    );
    useEffect(() => {
        const ps = new PerfectScrollbar('#datatable');
        ps.update();
    }, []);
    return (
        <div className="tab-content">
            <table width="100%" height="100%" style={{ padding: 20 }}>
                <tbody height="100%">
                    <tr>
                        <td width="20%" valign="bottom" align="left">
                            &nbsp;&nbsp;&nbsp;&nbsp;Select Group
                        </td>
                        <td style={{ paddingLeft: 20 }} height="30">
                            <div style={{ display: 'flex' }}>
                                <FormControl>
                                    <InputLabel id="role-select">Role: </InputLabel>
                                    <Select
                                        labelId="role-select"
                                        // value={provider}
                                        // onChange={providerChange}
                                        // input={<BootstrapInput />}
                                        placeholder="Role"
                                        style={{ width: 200 }}
                                    >
                                        <option value={null}></option>
                                        {roles.map((role) => (
                                            <option value={role.id}>{role.name}</option>
                                        ))}
                                    </Select>
                                </FormControl>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <FormControl>
                                    <InputLabel id="status-select">Status: </InputLabel>
                                    <Select
                                        labelId="status-select"
                                        // value={provider}
                                        // onChange={providerChange}
                                        // input={<BootstrapInput />}
                                        placeholder="Status"
                                        style={{ width: 200 }}
                                    >
                                        <option value={null}></option>
                                        <option value={false}>Disable</option>
                                        <option value={true}>Active</option>
                                    </Select>
                                </FormControl>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {/* <label className="search_label">Project Name</label> */}
                                <Paper component="form" style={{ marginTop: 3, height: 44, paddingLeft: 10 }}>
                                    <InputBase placeholder="Search" inputProps={{ 'aria-label': 'search project' }} />
                                    <IconButton type="submit" aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                </Paper>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: 10 }}>
                            <div
                                className="MuiPaper-elevation1"
                                style={{ backgroundColor: 'white', borderRadius: 4, width: '100%', height: '100%' }}
                            >
                                <CheckboxTree
                                    noCascade
                                    nodes={data}
                                    checked={checked}
                                    expanded={expanded}
                                    onCheck={handleCheck}
                                    onExpand={(checkedArr) => setExpanded(checkedArr)}
                                    iconsClass="fa5"
                                />
                            </div>
                        </td>
                        <td style={{ padding: 10 }}>
                            {/* <MaterialTable
                                title="Users"
                                columns={[
                                    { title: 'Name', field: 'name' },
                                    { title: 'Surname', field: 'surname' },
                                    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                                    {
                                        title: 'Birth Place',
                                        field: 'birthCity',
                                        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                                    },
                                ]}
                                data={[
                                    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                                ]}
                                options={{
                                    filtering: true
                                }}
                            /> */}
                            <Paper className="" style={{ width: '100%', height: '100%', position: 'relative', minWidth: 200 }}>
                                <TableContainer id="datatable" className="" style={{ width: '100%', height: '50vh', position: 'relative' }}>
                                    <Table stickyHeader aria-label="sticky table" className="min-w-xl">
                                        <TableHead>
                                            <TableRow>
                                                {columns.map((column) => (
                                                    <TableCell
                                                        key={column.field}
                                                        align={column.align}
                                                        style={{ minWidth: column.minWidth, backgroundColor: 'f6f7f9' }}
                                                    >
                                                        {column.title}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((record) => {
                                                const row = new User(record);
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                                        {columns.map((column) => {
                                                            const value = row[column.field];
                                                            return (
                                                                <TableCell key={column.field} align={column.align} style={{ padding: 10 }}>
                                                                    {column.format ? column.format(value) : value}
                                                                </TableCell>
                                                            );
                                                        })}
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 100]}
                                    component="div"
                                    count={users.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                    style={{ position: 'absolute', bottom: 0, width: '100%' }}
                                />
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
