import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { users as usersActions } from '../../store/actions';
import { getFilteredUsers } from '../../selectors';
import Types from '../../classes/types';
import Filters from '../../components/filters';
import UsersList from '../../components/users-list';
import './users.scss';

const { routesMap } = Types;

const Users = () => {
    const users = useSelector(getFilteredUsers);
    const filterType = useSelector((state) => state.users.filterType);
    const filterKey = useSelector((state) => state.users.filterKey);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteUser = (userId) => dispatch(usersActions.deleteUser(userId));

    const onAddNewUser = () => navigate(routesMap.get('add-user').path);

    const onChangeFilterType = (type) => dispatch(usersActions.setFilterType(type));

    const onChangeFilterKey = (key) => dispatch(usersActions.setFilterKey(key));

    const viewUser = (userId) => {
        if (!userId) return;
        const usersPath = routesMap.get('users').path;
        navigate(`${usersPath}/${userId}`);
    };

    return (
        <div className='Users'>
            <h2>Пользователи</h2>
            <Filters
                filterType={filterType}
                filterKey={filterKey}
                onChangeFilterType={onChangeFilterType}
                onChangeFilterKey={onChangeFilterKey}
            />
            <UsersList list={users} onDelete={deleteUser} onView={viewUser} />
            <button
                type='button'
                className='add-user-button'
                onClick={onAddNewUser}
            >
                Добавить пользователя
            </button>
        </div>
    );
};

export default Users;
