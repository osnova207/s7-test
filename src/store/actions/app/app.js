import { batch } from 'react-redux';
import Types from '../../../classes/types';
import StorageService from '../../../classes/storage-service';

const { localStorageKeys } = Types;

export const APP_SET_AUTH = 'APP_SET_AUTH';
export const APP_SET_TOKEN = 'APP_SET_TOKEN';
export const APP_SET_USER_NAME = 'APP_SET_USER_NAME';
export const APP_SET_AUTH_LOADING = 'APP_SET_AUTH_LOADING';
export const APP_SET_AUTH_ERROR = 'APP_SET_AUTH_ERROR';

export const setAuth = (payload = false) => ({
    type: APP_SET_AUTH,
    payload,
});

export const setToken = (payload = '') => ({
    type: APP_SET_TOKEN,
    payload,
});

export const setUserName = (payload = '') => ({
    type: APP_SET_USER_NAME,
    payload,
});

export const setAuthLoading = (payload = true) => ({
    type: APP_SET_AUTH_LOADING,
    payload,
});

export const setAuthError = (payload = '') => ({
    type: APP_SET_AUTH_ERROR,
    payload,
});

export const getAuth = (email, password) => (dispatch, getState, ApiService) => {
    dispatch(setAuthLoading(true));
    dispatch(setAuthError(''));
    ApiService.getAuth(email, password)
        .then((res) => {
            const { token } = res.data;

            StorageService.set(localStorageKeys.token, token);
            StorageService.set(localStorageKeys.userName, email);

            batch(() => {
                dispatch(setAuth(true));
                dispatch(setToken(token));
                dispatch(setUserName(email));
                dispatch(setAuthLoading(false));
            });
        })
        .catch((err) => {
            const { error } = err.response.data;

            StorageService.remove(localStorageKeys.token);
            StorageService.remove(localStorageKeys.userName);

            batch(() => {
                dispatch(setAuth(false));
                dispatch(setToken(''));
                dispatch(setUserName(''));
                dispatch(setAuthError(error));
                dispatch(setAuthLoading(false));
            });
        });
};

export const setLogout = () => (dispatch) => {
    StorageService.remove(localStorageKeys.token);
    StorageService.remove(localStorageKeys.userName);

    batch(() => {
        dispatch(setAuth(false));
        dispatch(setToken(''));
        dispatch(setUserName(''));
    });
};
