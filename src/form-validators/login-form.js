import * as Yup from 'yup';

export const loginFormValidationSchema = Yup.object({
    email: Yup.string()
        .email('Не верный адрес почты')
        .required('Обязательно к заполнению'),
    password: Yup.string()
        .min(5, 'Слишком короткий пароль')
        .required('Обязательно к заполнению'),
});
