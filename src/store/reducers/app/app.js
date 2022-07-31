import { app as appActions } from '../../actions';
import Types from '../../../classes/types';
import StorageService from '../../../classes/storage-service';

const { localStorageKeys } = Types;

const token = StorageService.get(localStorageKeys.token);
const userName = StorageService.get(localStorageKeys.userName);

const initialState = {
    isAuth: !!token && !!userName,
    token: token || '',
    userName: userName || '',
    authLoading: false,
    authError: '',
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case appActions.APP_SET_AUTH:
            return {
                ...state,
                isAuth: action.payload,
            };

        case appActions.APP_SET_TOKEN:
            return {
                ...state,
                token: action.payload,
            };

        case appActions.APP_SET_USER_NAME:
            return {
                ...state,
                userName: action.payload,
            };

        case appActions.APP_SET_AUTH_LOADING:
            return {
                ...state,
                authLoading: action.payload,
            };

        case appActions.APP_SET_AUTH_ERROR:
            return {
                ...state,
                authError: action.payload,
            };

        default:
            return state;
    }
};

export default app;
