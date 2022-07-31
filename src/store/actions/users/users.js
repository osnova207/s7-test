import { batch } from 'react-redux';
import StorageService from '../../../classes/storage-service';
import { mapUserToModel } from '../../../utils/utils';
import UserModel from '../../../models/user-model';
import Types from '../../../classes/types';

const { filtersTypesMap, localStorageKeys } = Types;
const defaultFilterType = filtersTypesMap.get('firstName').value;

export const USERS_SET_USERS = 'USERS_SET_USERS';
export const USERS_SET_LOADING = 'USERS_SET_LOADING';
export const USERS_SET_ERROR = 'USERS_SET_ERROR';
export const USERS_SET_FILTER_TYPE = 'USERS_SET_FILTER_TYPE';
export const USERS_SET_FILTER_KEY = 'USERS_SET_FILTER_KEY';

export const setUsers = (payload = []) => ({
    type: USERS_SET_USERS,
    payload,
});

export const setLoading = (payload = true) => ({
    type: USERS_SET_LOADING,
    payload,
});

export const setError = (payload = '') => ({
    type: USERS_SET_ERROR,
    payload,
});

export const getUsers = (page = 1) => (dispatch, getState, ApiService) => {
    dispatch(setLoading(true));
    ApiService.getUsers(page)
        .then((res) => {
            const { data: users } = res.data;

            const nextUsers = (users || []).map(mapUserToModel);

            batch(() => {
                dispatch(setUsers(nextUsers));
                dispatch(setLoading(false));
                dispatch(setError(''));
            });
        })
        .catch((err) => {
            const { error } = err.response.data;
            batch(() => {
                dispatch(setError(error));
                dispatch(setLoading(false));
            });
        });
};

export const deleteUser = (userId = 0) => (dispatch, getState) => {
    if (!userId) return;
    const users = getState().users.users;
    const nextUsers = users.filter(({ id }) => id !== userId);
    dispatch(setUsers(nextUsers));
};

export const addUser = (user) => (dispatch, getState) => {
    const users = getState().users.users;
    const idsArr = users.map(({ id }) => +id);
    const newUserId = Math.max(...idsArr) + 1;
    const newUserModel = new UserModel({ ...user, id: newUserId });
    const nextUsers = [...users, newUserModel];
    dispatch(setUsers(nextUsers));
};

export const setFilterType = (payload = defaultFilterType) => (dispatch) => {
    StorageService.set(localStorageKeys.filterType, payload);

    dispatch({
        type: USERS_SET_FILTER_TYPE,
        payload,
    });
};

export const setFilterKey = (payload = '') => (dispatch) => {
    StorageService.set(localStorageKeys.filterKey, payload);

    dispatch({
        type: USERS_SET_FILTER_KEY,
        payload,
    });
};
