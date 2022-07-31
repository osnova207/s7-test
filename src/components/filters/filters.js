import React from 'react';
import PropTypes from 'prop-types';
import Types from '../../classes/types';
import './filters.scss';

const { filtersTypes } = Types;

const Filters = ({ filterType, filterKey, onChangeFilterType, onChangeFilterKey }) => (
    <div className='Filters'>
        <div className='Filters__item'>
            <label htmlFor='filterKey' className='filterKey-label'>Поиск:</label>
            <input
                className='filterKey-input'
                id='filterKey'
                name='filterKey'
                placeholder='Введите фразу...'
                value={filterKey}
                onChange={(e) => onChangeFilterKey(e.target.value)}
            />
        </div>

        {filtersTypes.map(({ id, key, title }) => (
            <div className='Filters__item' key={id}>
                <label htmlFor={key} className='filterKey-label'>{`${title}:`}</label>
                <input
                    type='checkbox'
                    className='filterType-input'
                    id={key}
                    name={key}
                    value={filterType}
                    checked={filterType === key}
                    onChange={() => onChangeFilterType(key)}
                />
            </div>
        ))}
    </div>
);

Filters.propTypes = {
    filterType: PropTypes.string.isRequired,
    filterKey: PropTypes.string.isRequired,
    onChangeFilterType: PropTypes.func.isRequired,
    onChangeFilterKey: PropTypes.func.isRequired,
};

export default Filters;
