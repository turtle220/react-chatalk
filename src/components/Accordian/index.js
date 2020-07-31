import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PerfectScrollbar from 'perfect-scrollbar';

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0
        },
        '&:before': {
            display: 'none'
        },
        '&$expanded': {
            margin: 'auto'
        }
    },
    expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56
        }
    },
    content: {
        '&$expanded': {
            margin: '12px 0'
        }
    },
    expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiAccordionDetails);

export default function CustomizedAccordions(props) {
    const [expanded, setExpanded] = React.useState('0');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    useEffect(() => {
        const ps = new PerfectScrollbar('#roletable');
        ps.update();
    }, []);
    return (
        <div id="roletable" style={{ width: '95%', height: 280, padding: 10, position: 'relative' }}>
            {props.data.map((rec) => {
                return (
                    <Accordion square expanded={expanded === rec.id} onChange={handleChange(rec.id)} style={{ padding: 0 }}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{ minHeight: 40 }}>
                            <Typography>{rec.label}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {rec.children &&
                                    rec.children.map((child) => {
                                        return (
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                                        name={child.id}
                                                    />
                                                }
                                                label={child.label}
                                                style={{ width: '100%' }}
                                            />
                                        );
                                    })}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
}
