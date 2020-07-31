const user_session = (state = null, action) => {
    switch (action.type) {
        case 'USER_LOGIN_RESULT':
            return action.value;

        case 'USER_LOGIN':
        default:
            return null;
    }
};
export default user_session;
