import BaseModel from './base';

export default class UserModel extends BaseModel {
    constructor(initData) {
        super();
        this.id = 0;
        this.email = '';
        this.firstName = '';
        this.lastName = '';
        this.avatar = '';

        this.copyFrom(initData);
    }
}
