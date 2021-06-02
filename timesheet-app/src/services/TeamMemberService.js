import { getAxiosAPI, postAxiosAPI, putAxiosAPI, deleteAxiosAPI } from './Service';

const TEAMMEMBERURL = '/TeamMembers'

export function getTeamMembers() {
    return getAxiosAPI(TEAMMEMBERURL);
}

export function createTeamMember(requestBody) {
    return postAxiosAPI(TEAMMEMBERURL, requestBody);
}

export function putTeamMember(id, requestBody) {
    return putAxiosAPI(`${TEAMMEMBERURL}?id=${id}`, requestBody);
}

export function deleteTeamMember(id) {
    return deleteAxiosAPI(`${TEAMMEMBERURL}?id=${id}`);
}