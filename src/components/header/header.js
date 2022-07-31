import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { app as appActions } from '../../store/actions';
import Types from '../../classes/types';
import './header.scss';

const { routesMap } = Types;

const Header = () => {
    const isAuth = useSelector((state) => state.app.isAuth);
    const userName = useSelector((state) => state.app.userName);
    const dispatch = useDispatch();
    const linksArr = ['main', 'users', 'profile'];

    const onLogout = () => dispatch(appActions.setLogout());

    return (
        <div className='Header'>
            <ul className='Header__links'>
                {linksArr.map((link) => {
                    const { id, path, title } = routesMap.get(link);
                    return (
                        <li key={id} className='link-wrapper'>
                            <NavLink to={path} className='link'>{title}</NavLink>
                        </li>
                    )
                })}
            </ul>

            {(isAuth && userName) ? (<div className='Header__user'>
                {userName}
                <button
                    type='button'
                    onClick={onLogout}
                    className='logout-button'
                >
                    Выйти
                </button>
            </div>) : null}
        </div>
    );
};

export default Header;
