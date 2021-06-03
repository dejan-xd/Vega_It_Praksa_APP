import { getAxiosAPI, postAxiosAPI, putAxiosAPI, deleteAxiosAPI } from './Service';

const ROLEURL = '/Roles'

export function getRoles() {
    return getAxiosAPI(ROLEURL);
}

export function createRole(requestBody) {
    return postAxiosAPI(ROLEURL, requestBody);
}

export function putRole(id, requestBody) {
    return putAxiosAPI(`${ROLEURL}?id=${id}`, requestBody);
}

export function deleteRole(id) {
    return deleteAxiosAPI(`${ROLEURL}?id=${id}`);
}