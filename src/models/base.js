export default class BaseModal {
    copyFrom(data) {
        if (data === null || typeof data !== 'object') {
            return;
        }

        for (const name in data) {
            if (Object.prototype.hasOwnProperty.call(data, name)) {
                this[name] = data[name];
            }
        }

        return this;
    }
}
