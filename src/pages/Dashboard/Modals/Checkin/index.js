import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

import Modals from '../index';
import './index.css';
import TimePicker from '../../../../components/TimePicker/index';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 530
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
    iconButton: {
        padding: 3
    },
    divider: {
        height: 28,
        margin: 4
    },
    margin: {
        margin: theme.spacing(1)
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
        fontSize: 16,
        padding: '10px 26px 10px 12px',
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

export default function Checkin(props) {
    const classes = useStyles();
    const [provider, setProvider] = React.useState('');
    const [category, setCategory] = React.useState('');
    const providerChange = (event) => {
        setProvider(event.target.value);
    };
    const categoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className="checkin_modal">
            <div className="modal_header">
                <span className="modal_title">
                    <p>Patient - Check in</p>
                </span>
                <span
                    className="close_btn"
                    onClick={() => {
                        Modals.close('.checkin_modal');
                    }}
                >
                    <CloseOutlinedIcon className="icon" />
                </span>
            </div>
            <div className="project_search">
                <label className="search_label">Project Name</label>
                <Paper component="form" className={classes.root} style={{ height: 39 }}>
                    <InputBase className={classes.input} placeholder="Search Project" inputProps={{ 'aria-label': 'search project' }} />
                    <IconButton type="submit" className={`${classes.iconButton}`} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
            <div className="select_div">
                <div className="provider_select">
                    <label className="search_label">Provider</label>
                    <FormControl className={classes.margin} style={{ width: 250, marginTop: 0, height: 39 }}>
                        <NativeSelect id="demo-customized-select" value={provider} onChange={providerChange} input={<BootstrapInput />}>
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                </div>
                <div className="category_select">
                    <label className="search_label">Category</label>
                    <FormControl className={classes.margin} style={{ width: 250, marginTop: 0, height: 39 }}>
                        <NativeSelect id="demo-customized-select" value={category} onChange={categoryChange} input={<BootstrapInput />}>
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                </div>
            </div>
            <hr className="h_line"></hr>

            <TimePicker />

            <div className="btn_container-checkin">
                <button
                    className="cancel_btn ripple-btn"
                    onClick={() => {
                        Modals.close('.checkin_modal');
                    }}
                >
                    Cancel
                </button>
                <button className="submit_btn ripple-btn">submit</button>
            </div>
        </div>
    );
}
