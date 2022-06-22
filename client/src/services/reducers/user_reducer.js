import {
    SIGNUP_USER,
    LOGIN_USER,
    AUTH_USER,
    LOGOUT_USER
} from '../actions/types';

export default function(state={}, action) {
    switch(action.type) {
        case SIGNUP_USER:
            return { ...state, signup: action.payload }
        case LOGIN_USER:
            return { ...state, token: action.payload }
        case AUTH_USER:
            return { ...state, user: action.payload }
        case LOGOUT_USER:
            return { ...state }
        default:
            return state;
    }
}
