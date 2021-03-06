import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utilities';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectUrl: '/'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return updateObject(state, {error: null, loading: true});
        case actionTypes.AUTH_SUCCESS:
            return updateObject(state, {
                token: action.token,
                userId: action.userId,
                error: null,
                loading: false
            });
        case actionTypes.AUTH_FAIL:
            return updateObject(state, {loading: false, error: action.error});
        case actionTypes.AUTH_LOGOUT:
            return updateObject(state, {token: null, userId: null});
        case actionTypes.SET_AUTH_REDIRECT_URL:
            return updateObject(state, {authRedirectUrl: action.authRedirectUrl})
        default:
            return state;
    }
}

export default reducer;