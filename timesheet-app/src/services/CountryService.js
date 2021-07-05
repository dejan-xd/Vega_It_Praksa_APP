import { getAxiosAPI, postAxiosAPI, putAxiosAPI, deleteAxiosAPI } from './Service';

const COUNTRYURL = '/Countries'

export function getCountries() {
    return getAxiosAPI(COUNTRYURL);
}

export function createCountry(requestBody) {
    return postAxiosAPI(COUNTRYURL, requestBody);
}

export function putCountry(id, requestBody) {
    return putAxiosAPI(`${COUNTRYURL}?id=${id}`, requestBody);
}

export function deleteCountry(id) {
    return deleteAxiosAPI(`${COUNTRYURL}?id=${id}`);
}