import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { app as appActions } from '../../store/actions';
import Types from '../../classes/types';
import LoginForm from '../../components/login-form';
import './login.scss';

const { routesMap } = Types;

const Login = () => {
    const isAuth = useSelector((state) => state.app.isAuth);
    const authError = useSelector((state) => state.app.authError);
    const dispatch = useDispatch();

    const profilePath = routesMap.get('profile').path;

    const onLogin = (formikValues = {}) => {
        const { email, password } = formikValues;

        if (!email || !password) return;

        dispatch(appActions.getAuth(email, password));
    };

    return (
        <div className='Login'>
            <h2>Авторизация</h2>
            <LoginForm onSubmit={onLogin} />
            {isAuth ? <Navigate to={profilePath} replace /> : null}
            <div className='Login__error'>
                {authError || null}
            </div>
        </div>
    );
};

export default Login;
