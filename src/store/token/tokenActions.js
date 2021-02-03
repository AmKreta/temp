import { UPDATE_ACCESS_TOKEN } from './tokenActionTypes';

export const updateAccessToken = function (payload) {
    return { type: UPDATE_ACCESS_TOKEN, payload: payload };
}