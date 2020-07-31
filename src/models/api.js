import axios from 'axios';

axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default class API {
    static request(api, params = null) {
        if (axios[api.method])
            return params
                ? axios[api.method](api.url, params, { headers: api.headers })
                : axios[api.method](api.url, { headers: api.headers });
        return null;
    }

    static GROUP = {
        LIST: {
            method: 'get',
            url: 'http://ec2-3-23-164-200.us-east-2.compute.amazonaws.com:3000/groups',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Q2hhdGFsa19Ob2RlX0FQSV9EZXZlbG9wZWQhQCM='
            }
        }
    };
    static USER = {
        LOGIN: {
            method: 'post',
            url: 'http://ec2-3-23-164-200.us-east-2.compute.amazonaws.com:3000/login',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Q2hhdGFsa19Ob2RlX0FQSV9EZXZlbG9wZWQhQCM='
            }
        },
        LIST: {
            method: 'get',
            url: 'http://ec2-3-23-164-200.us-east-2.compute.amazonaws.com:3000/users',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Q2hhdGFsa19Ob2RlX0FQSV9EZXZlbG9wZWQhQCM='
            }
        }
    };
}
