import React from 'react';
import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { addUserFormValidationSchema } from '../../form-validators/add-user-form';
import './add-user-form.scss';

const AddUserForm = ({ onAddUser }) => (
    <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            avatar: '',
        }}
        validationSchema={addUserFormValidationSchema}
        onSubmit={onAddUser}
    >
        {({
              touched,
              errors,
          }) => (
            <Form className='AddUser__form'>
                <div className='input-field-wrapper'>
                    <label htmlFor='firstName' className='field-label'>Имя:</label>
                    <Field
                        className={classnames('input-field', { error: errors.firstName && touched.firstName })}
                        id='firstName'
                        name='firstName'
                        placeholder='Введите имя'
                    />
                    {(errors.firstName && touched.firstName) ? (
                        <div className='field-error'>{errors.firstName}</div>
                    ) : null}
                </div>

                <div className='input-field-wrapper'>
                    <label htmlFor='password' className='field-label'>Фамилия:</label>
                    <Field
                        className={classnames('input-field', { error: errors.lastName && touched.lastName })}
                        id='lastName'
                        name='lastName'
                        placeholder='Введите фамилию'
                    />
                    {(errors.lastName && touched.lastName) ? (
                        <div className='field-error'>{errors.lastName}</div>
                    ) : null}
                </div>

                <div className='input-field-wrapper'>
                    <label htmlFor='email' className='field-label'>Email:</label>
                    <Field
                        className={classnames('input-field', { error: errors.email && touched.email })}
                        id='email'
                        name='email'
                        placeholder='Введите адрес почты'
                    />
                    {(errors.email && touched.email) ? (
                        <div className='field-error'>{errors.email}</div>
                    ) : null}
                </div>

                <div className='input-field-wrapper'>
                    <label htmlFor='email' className='field-label'>Аватар:</label>
                    <Field
                        className={classnames('input-field', { error: errors.avatar && touched.avatar })}
                        id='avatar'
                        name='avatar'
                        placeholder='Введите ссылку на аватар'
                    />
                    {(errors.avatar && touched.avatar) ? (
                        <div className='field-error'>{errors.avatar}</div>
                    ) : null}
                </div>

                <div className='submit-button-wrapper'>
                    <button
                        type='submit'
                        className='submit-button'
                        disabled={Object.keys(errors).length}
                    >
                        Сохранить
                    </button>
                </div>
            </Form>
        )}
    </Formik>
);

AddUserForm.propTypes = {
    onAddUser: PropTypes.func.isRequired,
};

export default AddUserForm;
