import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Formik, Form, Field } from 'formik';
import { loginFormValidationSchema } from '../../form-validators/login-form';
import './login-form.scss';

const LoginForm = ({ onSubmit }) => (
    <Formik
        initialValues={{
            email: '',
            password: '',
        }}
        validationSchema={loginFormValidationSchema}
        onSubmit={onSubmit}
    >
        {({
              touched,
              errors,
          }) => (
            <Form className='Login__form'>
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
                    <label htmlFor='password' className='field-label'>Пароль:</label>
                    <Field
                        className={classnames('input-field', { error: errors.password && touched.password })}
                        id='password'
                        name='password'
                        placeholder='Введите пароль'
                    />
                    {(errors.password && touched.password) ? (
                        <div className='field-error'>{errors.password}</div>
                    ) : null}
                </div>

                <div className='submit-button-wrapper'>
                    <button
                        type='submit'
                        className='submit-button'
                        disabled={Object.keys(errors).length}
                    >
                        Войти
                    </button>
                </div>
            </Form>
        )}
    </Formik>
);

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
