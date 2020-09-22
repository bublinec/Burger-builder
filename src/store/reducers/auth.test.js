import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
                token: null,
                userId: null,
                error: null,
                loading: false,
                authRedirectUrl: '/'
            });
    });
    it('should store the toke upon loading', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectUrl: '/'
        }, {
            type: actionTypes.AUTH_SUCCESS,
            token: 'token-is-just-random-string-therefore-this-is-sufficient-for-testing-purposes-of-course',
            userId: 'and-deosnt-need-to-be-that-long-:D'
        })).toEqual({
            token: 'token-is-just-random-string-therefore-this-is-sufficient-for-testing-purposes-of-course',
            userId: 'and-deosnt-need-to-be-that-long-:D',
            error: null,
            loading: false,
            authRedirectUrl: '/'
        });
    });
});