import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { users as usersActions } from '../../store/actions';
import Types from '../../classes/types';
import AddUser from '../add-user';
import AuthRoute from '../../components/auth-route';
import Header from '../../components/header';
import Login from '../login';
import Main from '../main';
import Profile from '../profile';
import User from '../user';
import Users from '../users';

const { routesMap } = Types;

const App = () => {
    const isAuth = useSelector((state) => state.app.isAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersActions.getUsers());
    }, [dispatch]);

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path={routesMap.get('main').path} element={<Main />} />
                <Route path={routesMap.get('login').path} element={<Login />} />
                <Route path={routesMap.get('profile').path} element={
                    <AuthRoute isAuth={isAuth}>
                        <Profile />
                    </AuthRoute>
                } />
                <Route path={routesMap.get('users').path} element={<Users />} />
                <Route path={routesMap.get('users').path}>
                    <Route path=':id' element={<User />} />
                </Route>
                <Route path={routesMap.get('add-user').path} element={<AddUser />} />
                <Route path="*" element={<div className="PageNotFount">Страница не найдена...</div>} />
            </Routes>
        </div>
    );
};

export default App;
