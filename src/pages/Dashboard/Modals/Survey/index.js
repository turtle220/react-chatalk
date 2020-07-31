import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CloseIcon from '@material-ui/icons/Close';

import './index.css';
import Modals from '../index';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 250
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
    iconButton: {
        padding: 1
    },
    margin: {
        margin: theme.spacing(1)
    },
    table: {
        minWidth: 0
    }
}));

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3)
        }
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        padding: '8px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
        }
    }
}))(InputBase);

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.lightgrey,
        paddingLeft: 0,
        paddingRight: 0,
        width: 100
    },
    body: {
        fontSize: 12
    }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover
        }
    }
}))(TableRow);

function createData(key, patientname, provider) {
    return { key, patientname, provider };
}

const rows = [
    createData(1, 'JOhn Doe', 'JOhn Doe'),
    createData(2, 'JOhn Doe', 'JOhn Doe'),
    createData(3, 'JOhn Doe', 'JOhn Doe'),
    createData(4, 'JOhn Doe', 'JOhn Doe'),
    createData(5, 'JOhn Doe', 'JOhn Doe')
];

export default function Survey(props) {
    const classes = useStyles();
    const [provider, setProvider] = React.useState('');
    const providerChange = (event) => {
        setProvider(event.target.value);
    };

    const closebtn = (
        <button className="closeBtn ripple-btn" onClick={console.log('close')}>
            <CloseIcon size="small" />
        </button>
    );

    const pendingbtn = (
        <button className="pending_btn ripple-btn" onClick={console.log('pending')}>
            pending
        </button>
    );
    return (
        <div className="survey_modal">
            <div className="modal_header">
                <span className="modal_title">
                    <p>Patient - Conduct Survey</p>
                </span>
                <span
                    className="close_btn"
                    onClick={() => {
                        Modals.close('.survey_modal');
                    }}
                >
                    <CloseOutlinedIcon className="icon" />
                </span>
            </div>
            <div style={{ height: 60 }}>
                <div className="search">
                    <Paper component="form" className={classes.root} style={{ height: 34 }}>
                        <InputBase className={classes.input} placeholder="Search Project" inputProps={{ 'aria-label': 'search project' }} />
                        <IconButton type="submit" className={`${classes.iconButton}`} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
                <div className="provider_selection">
                    <FormControl className={classes.margin} style={{ width: 100 }}>
                        <NativeSelect id="demo-customized-select" value={provider} onChange={providerChange} input={<BootstrapInput />}>
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                </div>
            </div>
            <hr className="h_line"></hr>
            <div className="table_div">
                <TableContainer component={Paper} style={{ marginRight: 29, marginLeft: 29, width: '90%' }}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Patient Name</StyledTableCell>
                                <StyledTableCell align="center">Provider</StyledTableCell>
                                <StyledTableCell align="center">Status</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.key}>
                                    <StyledTableCell component="th" scope="row" align="center">
                                        {row.patientname}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.provider}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        {pendingbtn} {closebtn}
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="btn_container-survey">
                <button
                    className="cancel_btn ripple-btn"
                    onClick={() => {
                        Modals.close('.survey_modal');
                    }}
                >
                    Cancel
                </button>
                <button className="submit_btn ripple-btn">submit</button>
            </div>
        </div>
    );
}
