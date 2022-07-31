import { users as appActions } from '../../actions';
import StorageService from '../../../classes/storage-service';
import Types from '../../../classes/types';

const { filtersTypesMap, localStorageKeys } = Types;

const filterKey = StorageService.get(localStorageKeys.filterKey);
const filterType = StorageService.get(localStorageKeys.filterType);

const initialState = {
    users: [],
    loading: false,
    error: '',
    filterType: filterType || filtersTypesMap.get('firstName').value,
    filterKey: filterKey || '',
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case appActions.USERS_SET_USERS:
            return {
                ...state,
                users: action.payload,
            };

        case appActions.USERS_SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };

        case appActions.USERS_SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        case appActions.USERS_SET_FILTER_TYPE:
            return {
                ...state,
                filterType: action.payload,
            };

        case appActions.USERS_SET_FILTER_KEY:
            return {
                ...state,
                filterKey: action.payload,
            };

        default:
            return state;
    }
};

export default app;
