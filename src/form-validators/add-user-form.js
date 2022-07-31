import * as Yup from 'yup';

export const addUserFormValidationSchema = Yup.object({
    firstName: Yup.string()
        .min(3, 'Имя должно содержать минимум 3 символа')
        .required('Обязательно к заполнению'),
    lastName: Yup.string()
        .min(3, 'Фамилия должна содержать минимум 3 символа')
        .required('Обязательно к заполнению'),
    email: Yup.string()
        .email('Не верный адрес почты')
        .required('Обязательно к заполнению'),
    avatar: Yup.string()
        .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Не верная ссылка'
        )
        .required('Обязательно к заполнению'),
});
