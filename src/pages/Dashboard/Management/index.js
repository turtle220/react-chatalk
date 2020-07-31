import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Title from './Title';
import TabHeaderContainer from './TabHeaderContainer';
import ModalUser from '../Modals/ModalUser/index';
import ModalGroup from '../Modals/ModalGroup/index';
import ModalRole from '../Modals/ModalRole/index';
import Modals from '../Modals/index';
import './index.css';

export default function Management(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'ROLE_LIST' });
        dispatch({ type: 'GROUP_LIST' });
        dispatch({ type: 'USER_LIST' });
    }, [dispatch]);
    const onChangeTab = (tabId) => {
        // console.log("current tab index", tabId)
    };

    /**
     * @summary Show proper popup upto user's click menu in right top corner of /dashboard/management.
     * @param {number} menuId
     */
    const onClickNew = (menuId) => {
        console.log('current new menu index', menuId);
        switch (menuId) {
            case 0:
                Modals.show(<ModalRole />);
                break;
            case 1:
                dispatch({ type: 'GROUP_LIST' });
                Modals.show(<ModalUser />);
                break;
            case 2:
                dispatch({ type: 'ROLE_LIST' });
                Modals.show(<ModalGroup />);
                break;
            default:
        }
    };
    return (
        <>
            <Title onChanged={onClickNew} />{' '}
            <div style={{ padding: '2%', height: '86%', color: '#000000c0' }}>
                <TabHeaderContainer onChanged={onChangeTab} />{' '}
            </div>{' '}
        </>
    );
}
