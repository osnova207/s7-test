import React from 'react';
import { Navigate } from 'react-router-dom';
import Types from '../../classes/types';

const { routesMap } = Types;

const AuthRoute = ({ children, isAuth }) => {
    const authPath = routesMap.get('login').path;
    return isAuth ? children : <Navigate to={authPath} replace />
}

export default AuthRoute;
