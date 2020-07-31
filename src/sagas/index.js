import { put, takeEvery, all } from 'redux-saga/effects';

import Role from '../models/Role';
import User from '../models/User';
import Group from '../models/Group';

// role
function* roleList() {
    const ret = yield Role.list();
    yield put({ type: 'ROLE_REFRESH', value: ret.value });
}
function* watchRoleList() {
    yield takeEvery('ROLE_LIST', roleList);
}
// group
function* groupList() {
    const ret = yield Group.list();
    yield put({ type: 'GROUP_REFRESH', value: ret });
}
function* watchGroupList() {
    yield takeEvery('GROUP_LIST', groupList);
}

/////////////////////////////////////////////////////////////////////////
//                                 User                                //
/////////////////////////////////////////////////////////////////////////
/**
 * Login
 * @param action : {type: 'USER_LOGIN', value: { password, username} }
 */
function* userLogin(action) {
    const ret = yield User.login(action.value);
    yield put({ type: 'USER_LOGIN_RESULT', value: ret });
}
function* watchUserLogin() {
    yield takeEvery('USER_LOGIN', userLogin);
}
/**
 * Get list of users
 * @param action: { type: 'USER_LIST', value: null }
 */
function* userList(action) {
    const ret = yield User.list();
    yield put({ type: 'USER_REFRESH', value: ret });
}
function* watchUserList() {
    yield takeEvery('USER_LIST', userList);
}
/**
 *
 * @param {*} action : { type: 'USERID_CHECK_START', value: userId}
 */
function* userIdCheck(action) {
    const ret = yield User.idCheck(action.value);
    yield put({ type: 'USERID_CHECK_END', value: ret.value });
}
function* watchUserIdCheck(action) {
    yield takeEvery('USERID_CHECK_START', userIdCheck);
}

/**
 *
 */
export default function* rootSaga() {
    yield all([watchUserLogin(), watchUserList(), watchUserIdCheck(), watchGroupList(), watchRoleList()]);
}
