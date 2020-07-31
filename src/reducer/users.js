export default function users(state = { value: [], userIdCheckingStatus: 'idle' }, action) {
    switch (action.type) {
        case 'USER_LIST':
            break;
        case 'USER_REFRESH':
            console.log(action);
            state.value = [...action.value];
            break;
        case 'USERID_CHECK_START':
            state.userIdCheckingStatus = 'checking';
            break;
        case 'USERID_CHECK_END':
            state.userIdCheckingStatus = action.value;
            break;
        default:
    }
    return state;
}
