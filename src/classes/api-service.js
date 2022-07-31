import axios from 'axios';

class ApiService {
    baseApi = 'https://reqres.in/api';
    auth = '/login';
    users = '/users';

    getAuth = async (email, password) => await axios.post(this.baseApi + this.auth, {
        email,
        password
    });

    getUsers = async (page = 1, perPage = 999) => await axios.get(this.baseApi + this.users, {
        params: {
            page,
            per_page: perPage,
        },
    });
}

export default ApiService;
