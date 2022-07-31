export default class Types {
    static routes = [
        { id: 0, key: 'main', path: '/', title: 'На главную' },
        { id: 1, key: 'login', path: '/login', title: 'Авторизация' },
        { id: 2, key: 'users', path: '/users', title: 'Пользователи' },
        { id: 3, key: 'profile', path: '/profile', title: 'Профиль' },
        { id: 4, key: 'add-user', path: '/add-user', title: 'Добавить нового пользователя' },
    ];

    static routesMap = Types.routes.reduce((acc, item) => acc.set(item.key, { ...item }), new Map());

    static localStorageKeys = {
        token: 'TOKEN',
        userName: 'USER_NAME',
        filterKey: 'FILTER_KEY',
        filterType: 'FILTER_TYPE',
    };

    static filtersTypes = [
        { id: 0, key: 'firstName', title: 'По имени' },
        { id: 1, key: 'lastName', title: 'По фамилии' },
        { id: 2, key: 'email', title: 'По адресу почты' },
    ];

    static filtersTypesMap = Types.filtersTypes.reduce((acc, item) => acc.set(item.key, { ...item }), new Map());
}
