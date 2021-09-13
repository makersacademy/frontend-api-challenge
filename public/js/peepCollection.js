import { Peep } from './peep.js'

export class PeepCollection {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.all;
    }

    refresh() {
        let promise;

        if (this.key === "userID") {
            promise = Peep.fetchAllByUserID(this.value)
            .then(() => this.all = Peep.collection)

        } else if (this.key === "handle") {
            promise = Peep.fetchAllByHandle(this.value)
            .then(() => this.all = Peep.collection)

        } else {
            promise = Peep.fetchAll().then(() => this.all = Peep.all)
        }

        return promise;
    }
}
