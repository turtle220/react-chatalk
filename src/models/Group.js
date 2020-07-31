import API from './api';
import Utils from '../utils';

function virtualFetch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 2000);
    });
}

export default class Group {
    group_id = 0;
    group_parent_id;
    group_name = '';
    group_description = '';
    group_status = 0;
    created_datetime = null;
    updated_datetime = null;

    constructor(json) {
        this.group_id = json.group_id;
        this.group_parent_id = json.group_parent_id;
        this.group_name = json.group_name;
        this.group_description = json.group_description;
        this.group_status = json.group_status;
        this.created_datetime = json.created_datetime;
        this.updated_datetime = json.updated_datetime;
    }
    static async list() {
        // get user's list from backend
        try {
            const retVal = await API.request(API.GROUP.LIST);
            if (retVal.error) {
                Utils.error('Axios: Group list.', retVal.message);
            } else {
                return retVal.data.data;
            }
        } catch (e) {
            Utils.error('Axios: Group list.', e);
        }
        return [];
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
}
