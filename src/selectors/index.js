import { createSelector } from 'reselect';
import Types from '../classes/types';

const { filtersTypesMap } = Types;

const users = (state) => state.users.users;
const filterKey = (state) => state.users.filterKey;
const filterType = (state) => state.users.filterType;

export const getFilteredUsers = createSelector(
    [users, filterKey, filterType],
    (users, filterKey, filterType) => {
        if (!filterKey) return users;

        const filterTypeData = filtersTypesMap.get(filterType);
        return users.filter((it) => it[filterTypeData.key].toLowerCase().includes(filterKey.toLowerCase()));
    },
);
