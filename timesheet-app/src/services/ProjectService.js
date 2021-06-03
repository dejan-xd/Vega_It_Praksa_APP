import { getAxiosAPI, postAxiosAPI, putAxiosAPI, deleteAxiosAPI } from './Service';

const PROJECTURL = '/Projects'

export function getProjects() {
    return getAxiosAPI(PROJECTURL);
}

export function createProject(requestBody) {
    return postAxiosAPI(PROJECTURL, requestBody);
}

export function putProject(id, requestBody) {
    return putAxiosAPI(`${PROJECTURL}?id=${id}`, requestBody);
}

export function deleteProject(id) {
    return deleteAxiosAPI(`${PROJECTURL}?id=${id}`);
}