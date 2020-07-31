import API from './api';
import Utils from '../utils';

function virtualFetch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 2000);
    });
}
export default class User {
    constructor(json) {
        this.id = json.id;
        this.firstName = json.firstName;
        this.lastName = json.lastName;
        this.email = json.email;
        this.user_status = json.user_status;
        this.user_image = json.user_image;
        this.created_datetime = new Date(json.created_datetime);
        this.updated_datetime = new Date(json.updated_datetime);
        this.identification = json.identification;
    }
    static async list() {
        // get user's list from backend
        try {
            const retVal = await API.request(API.USER.LIST);
            if (retVal.error) {
                Utils.error('Axios: User list.', retVal.message);
            } else {
                Utils.log('Axios: User list.', retVal);
                return retVal.data.data;
            }
        } catch (e) {
            Utils.error('Axios: User list.', e);
        }
        return [];
    }
    static async idCheck(id) {
        await virtualFetch();
        return { success: true, value: Math.random() * 10 < 4 ? 'exists' : 'notExists' };
    }
    async add() {
        await virtualFetch();
        return { success: true, value: null, message: null };
    }
    async update(firstName, lastName, email, group, role) {
        await virtualFetch();
        return { success: true, value: null, message: null };
    }
    async delete() {
        await virtualFetch();
        return { success: true, value: null, message: null };
    }
    /**
     *
     * @param {*} param : {username, password}
     */
    static async login(param) {
        try {
            const retVal = await API.request(API.USER.LOGIN, param);
            if (retVal.error) {
                Utils.error('Axios: User login.', retVal.message);
            } else {
                Utils.log('Axios: User login.', retVal);
                return retVal.data;
            }
        } catch (e) {
            Utils.error('Axios: User login.', e);
        }
        return null;
    }
}
