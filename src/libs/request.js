import axios from 'axios';

export default (method, url, params={}, headers = "", responseType) => {
    const AUTH_TOKEN_KEY = 'persist:vietlook-auth';
    method = method.toLowerCase();
    let storeData = localStorage.getItem(AUTH_TOKEN_KEY);

    storeData = storeData ? JSON.parse(storeData) : '';

    let opts = {
        method : method,
        url: process.env.REACT_APP_API_ENDPOINT + url,
        headers: {
            token: storeData && storeData.authToken ? JSON.parse(storeData.authToken) : ''
        }
    };

    if (method==='get')
        opts.params = params;
    else 
        opts.data = params;

    if (headers) {
        opts.headers = Object.assign(opts.headers, headers);
    }

    if(responseType) {
        opts.responseType = responseType;
    }

    opts.validateStatus = (status) => {
        return true;
    }

    return axios(opts);
}