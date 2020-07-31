export default function roles(state = { value: [] }, action) {
    switch (action.type) {
        case 'ROLE_LIST':
            break;
        case 'ROLE_REFRESH':
            state.value = [...action.value];
            break;
        default:
    }
    return state;
}
