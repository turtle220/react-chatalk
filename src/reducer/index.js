import { combineReducers } from 'redux';
import user_session from './userSession';
import roles from './roles';
import groups from './groups';
import users from './users';

const rootReducer = combineReducers({
    user_session,
    roles,
    groups,
    users
});

export default rootReducer;
