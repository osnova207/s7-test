import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './user.scss';

const User = () => {
    const users = useSelector((state) => state.users.users);
    const loading = useSelector((state) => state.users.loading);
    const { id } = useParams();

    const currentUser = users.find(({ id: userId }) => userId === +id);

    const renderContent = () => {
        const { avatar, firstName, lastName, email } = currentUser;

        return (
            <React.Fragment>
                <div className='User__avatar-wrapper'>
                    <img src={avatar} alt='avatar-img' className='User__avatar' />
                </div>

                <div className='User__label'>
                    {`${firstName} ${lastName}`}
                </div>

                <div className='User__email'>
                    {email}
                </div>
            </React.Fragment>
        );
    };

    return (
        <div className='User'>
            {(!loading && currentUser) ? renderContent() : null}
            {(!loading && !currentUser) ? `Пользователь с идентификатором ${id} не найден!` : null}
        </div>
    );
};

export default User;