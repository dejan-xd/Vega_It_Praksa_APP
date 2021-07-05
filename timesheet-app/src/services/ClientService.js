import { getAxiosAPI, postAxiosAPI, putAxiosAPI, deleteAxiosAPI } from './Service';

const CLIENTURL = '/Clients'

export function getClients() {
    return getAxiosAPI(CLIENTURL);
}

export function createClient(requestBody) {
    return postAxiosAPI(CLIENTURL, requestBody);
}

export function putClient(id, requestBody) {
    return putAxiosAPI(`${CLIENTURL}?id=${id}`, requestBody);
}

export function deleteClient(id) {
    return deleteAxiosAPI(`${CLIENTURL}?id=${id}`);
}