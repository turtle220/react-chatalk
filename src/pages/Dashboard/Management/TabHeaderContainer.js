import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import FolderSharedOutlinedIcon from '@material-ui/icons/FolderSharedOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import TabHeader from './TabHeader';
import TabPanel from './TabPanel'
import TabUser from './TabUser'
import TabGroup from './TabGroup'
import TabRole from './TabRole'


export default function TabHeaderContainer(props) {
    const users = useSelector(state => state.users.value)
    const groups = useSelector(state => state.groups.value)
    const roles = useSelector(state => state.roles.value)
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        handleChange(null, 0);
    }, []);

    const handleChange = (event, newValue) => {
        setIndex(newValue);
        if (props.onChanged) props.onChanged(newValue)
    };

    return (
        <div style={{ height: 'inherit' }}>
            <div className='tab-header-container'>
                <TabHeader id={0} icon={<FolderSharedOutlinedIcon style={{ width: 40, height: 40 }} />} value={groups.length} description="Sub Groups" selected={index === 0} onChanged={handleChange} />
                <TabHeader id={1} icon={<PeopleAltOutlinedIcon style={{ width: 40, height: 40 }} />} value={users.length} description="Users" selected={index === 1} onChanged={handleChange} />
                <TabHeader id={2} icon={<DescriptionOutlinedIcon style={{ width: 40, height: 40 }} />} value={roles.length} description="Roles" selected={index === 2} onChanged={handleChange} />
            </div>
            <TabPanel value={index} index={0}>
                <TabGroup />

            </TabPanel>
            <TabPanel value={index} index={1}>
                <TabUser />
            </TabPanel>
            <TabPanel value={index} index={2}>
                <TabRole />

            </TabPanel>
        </div>
    );
}
