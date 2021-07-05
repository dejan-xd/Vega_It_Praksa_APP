import axios from 'axios'

const APIURL = 'http://localhost:5000/api'

function createAxiosAPI() {
    const instance = axios.create({
        baseURL: APIURL
    });
    return instance;
}

export function getAxiosAPI(url) {
    const axios = createAxiosAPI();
    return axios.get(url);
}

export function postAxiosAPI(url, requestBody) {
    const axios = createAxiosAPI();
    return axios.post(url, requestBody);
}

export function putAxiosAPI(url, requestBody) {
    const axios = createAxiosAPI();
    return axios.put(url, requestBody);
}

export function deleteAxiosAPI(url) {
    const axios = createAxiosAPI();
    return axios.delete(url);
}


