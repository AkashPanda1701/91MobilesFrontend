import {
    AUTH_SIGNUP_LOADING,
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_ERROR,
    AUTH_SIGNIN_LOADING,
    AUTH_SIGNIN_SUCCESS,
    AUTH_SIGNIN_ERROR,
    AUTH_LOGOUT,
    AUTH_RESET_MESSAGE
} from './actionTypes';

const T = localStorage.getItem('token') || null;
const initialState = {
    loading: false,
    error: false,
    token: T ,
    isAuth: !!T,
    message: '',
    role: ''
};

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case AUTH_SIGNUP_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
                message: ''
            };
        case AUTH_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                message: payload.message
            };
        case AUTH_SIGNUP_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                message: payload.message
            };
        case AUTH_SIGNIN_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
                message: ''
            };
        case AUTH_SIGNIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                loading: false,
                error: false,
                token: payload.token,
                isAuth: true,
                message: payload.message,
                role: payload.role
            };
        case AUTH_SIGNIN_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                message: payload.message
            };
        case AUTH_LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                loading: false,
                error: false,
                token: null,
                isAuth: false,
                message: '',
                role: ''
            };
        case AUTH_RESET_MESSAGE:
            return {
                ...state,
                message: ''
            };
        default:
            return state;
    }
}
       