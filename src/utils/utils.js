import UserModel from '../models/user-model';

export const mapUserToModel = (user = {}) => {
    const {
        id,
        email,
        first_name,
        last_name,
        avatar,
    } = user;

    return new UserModel({
        id,
        email,
        firstName: first_name,
        lastName: last_name,
        avatar,
    })
};
