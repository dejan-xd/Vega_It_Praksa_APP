import { getAxiosAPI, postAxiosAPI, putAxiosAPI, deleteAxiosAPI } from './Service';

const CATEGORYURL = '/Categories'

export function getCategories() {
    return getAxiosAPI(CATEGORYURL);
}

export function createCategory(requestBody) {
    return postAxiosAPI(CATEGORYURL, requestBody);
}

export function putCategory(id, requestBody) {
    return putAxiosAPI(`${CATEGORYURL}?id=${id}`, requestBody);
}

export function deleteCategory(id) {
    return deleteAxiosAPI(`${CATEGORYURL}?id=${id}`);
}