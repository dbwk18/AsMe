import axios from 'axios';
import {
    SIGNUP_USER,
    LOGIN_USER,
    AUTH_USER,
    LOGOUT_USER
} from './types';
import { USER_SERVER } from '../../Config/config';

export function signupUser(dataToSubmit) {
    const request = axios.post(`${USER_SERVER}/signup`, dataToSubmit)
    .then(response => response.data);

    return {
        type: SIGNUP_USER,
        payload: request
    }
}

export function loginUser(dataToSubmit) {
    const request = axios.post(`${USER_SERVER}/login`, dataToSubmit)
    .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function logoutUser() {
    const request = axios.get(`${USER_SERVER}/logout`)
    .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

export function auth(dataToSubmit) {
    const request = axios({
        method: 'get',
        url: `${USER_SERVER}/login/user`,
        headers: {
            "Authorization": `Bearer ${dataToSubmit}`
        }
    })
    .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}
