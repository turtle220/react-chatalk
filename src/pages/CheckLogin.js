export default function checkLogin(history, session) {
    return true;
    if (!session) {
        history.push('login');
        return false;
    }
    return true;
}
