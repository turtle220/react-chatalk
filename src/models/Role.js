function virtualFetch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 2000);
    });
}
export default class Role {
    id = 0;
    name = '';

    constructor(json) {
        this.id = json.id;
        this.name = json.name;
    }
    static async list() {
        // get user's list from backend
        await virtualFetch();
        const retVal = [
            { id: 1, name: 'Administrator', permission: 0 },
            { id: 2, name: 'Super User', permission: 1 },
            { id: 3, name: 'Manager', permission: 2 },
            { id: 4, name: 'User', permission: 3 }
        ];
        return { success: true, value: retVal.map((json) => new Role(json)), message: null };
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
