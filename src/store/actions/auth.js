import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => ({
    type: actionTypes.AUTH_START
});

export const authSuccess = (token, userId) => ({
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId
});

export const authFail = (error) => ({
    type: actionTypes.AUTH_FAIL,
    error: error
});

export const logout = () => {
    console.log('logout'); 
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');
    return {
    type: actionTypes.AUTH_LOGOUT
}}

export const logoutWhenExpire = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000);
    };
};

export const setAuthRedirectUrl = (authRedirectUrl) => ({
    type: actionTypes.SET_AUTH_REDIRECT_URL,
    authRedirectUrl: authRedirectUrl
})

export const auth = (email, password, isSignup, push, authRedirectUrl) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        // default url for signup (honestly expect more signups then logins :D)
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCc2OZLI_YCHcLR1hW5vPGCj8lD6rkrKfs'
        // if not signup mode
        if (!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCc2OZLI_YCHcLR1hW5vPGCj8lD6rkrKfs'
        }
        axios.post(url, authData)
            .then(response => {
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                // get the expiration dat
                const expirationDate = new Date(new Date().getTime() +  response.data.expiresIn * 1000);
                // store token, userId and expiaration date in the local storage
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('userId', response.data.localId);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(logoutWhenExpire(response.data.expiresIn));
                push(authRedirectUrl);
            })
            .catch(error => {
                if (error.response){
                    dispatch(authFail(error.response.data.error));
                } else {
                    console.log(error);
                }
            })
    }
}


export const tryAutoLogin = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token){
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            const currentDate = new Date();
            if (expirationDate < currentDate){
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(logoutWhenExpire((expirationDate - currentDate) / 1000));
            };
        };
    };
};