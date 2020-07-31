import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './index.css';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        margin: '0 auto',
        width: 540
    }
}));

export default function TimePickers() {
    const classes = useStyles();

    return (
        <form className={classes.container} style={{ paddingTop: 6 }} noValidate>
            <TextField
                id="time"
                label="Alarm clock"
                type="time"
                defaultValue="00:00"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true
                }}
                inputProps={{
                    step: 300 // 5 min
                }}
            />
        </form>
    );
}
