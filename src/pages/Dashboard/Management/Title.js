import React from 'react';
import Button from '@material-ui/core/Button';
import { NoteAdd, Business } from '@material-ui/icons'
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
export default function Title(props) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleCreate = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleBulk = () => {

    };

    const handleClose = (event) => {
        if (props.onChanged) props.onChanged(event.target.value)

        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);
    return (
        <div className='manage-title'>
            <div>My Network</div>
            <div>
                <Button
                    ref={anchorRef}
                    variant="outlined"
                    color="primary"
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleBulk}
                    className="ripple-btn"
                    style={{ color: "#3fbbb5", borderColor: "#3faab5" }}
                >
                    <Business /> &nbsp;&nbsp;Bulk
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                    ref={anchorRef}
                    variant="outlined"
                    color="secondary"
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleCreate}
                    className="ripple-btn"
                >
                    <NoteAdd /> &nbsp;&nbsp;Create
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{ zIndex: "200" }}>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={handleClose} className="ripple-btn" value={0}>New Role</MenuItem>
                                        <MenuItem onClick={handleClose} className="ripple-btn" value={1}>New User</MenuItem>
                                        <MenuItem onClick={handleClose} className="ripple-btn" value={2}>New Sub Group</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>);
}
