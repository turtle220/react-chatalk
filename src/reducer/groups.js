export default function groups(state = { value: [] }, action) {
    switch (action.type) {
        case 'GROUP_LIST':
            break;
        case 'GROUP_REFRESH':
            state.value = [...action.value];
            break;
        default:
    }
    return state;
}
