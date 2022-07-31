import React from 'react';
import PropTypes from 'prop-types';
import './users-list.scss';

const UsersList = ({ list, onDelete, onView }) => (
    <div className='UsersList'>
        {list.map(({ id, email, firstName, lastName }) => (
            <div className='UsersList__item' key={id}>
                <div className='label'>
                    <b>{`${firstName} ${lastName} `}</b>
                    {`(${email})`}
                </div>

                <div className='controls'>
                    <button
                        type='button'
                        className='view-button button'
                        onClick={() => onView(id)}
                    >
                        Посмотреть
                    </button>
                    <button
                        type='button'
                        className='delete-button button'
                        onClick={() => onDelete(id)}
                    >
                        Удалить
                    </button>
                </div>
            </div>
        ))}
    </div>
);

UsersList.propTypes = {
    list: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onView: PropTypes.func.isRequired,
};

export default UsersList;
