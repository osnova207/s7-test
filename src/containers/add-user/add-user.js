import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { users as usersActions } from '../../store/actions';
import Types from '../../classes/types';
import AddUserForm from '../../components/add-user-form';
import './add-user.scss';

const { routesMap } = Types;

const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addUser = (formikValues) => {
        dispatch(usersActions.addUser(formikValues));
        navigate(routesMap.get('users').path);
    };

    return (
        <div className='AddUser'>
            <h2>Добавление нового пользователя</h2>
            <AddUserForm onAddUser={addUser} />
        </div>
    );
};

export default AddUser;
