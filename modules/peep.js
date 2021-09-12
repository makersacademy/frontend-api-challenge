import fetch from "node-fetch";

export class Peep {
    static all;
    static current;
    static collection;

    static fetchID(peepID) {
        let promise = this.fetchAll()
        .then(() => this.current = Peep.all.find(peep => peep.id === peepID))

        return promise;
    }

    static fetchAll() {
        let promise = fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
        .then(response => response.json())
        .then(data => this.all = data)

        return promise;
    }

    static fetchAllByUserID(userID) {
        let promise = this.fetchAll()
        .then(() => {
            this.collection = Peep.all.filter(peep => peep.user.id === userID)
        })

        return promise;
    }

    static fetchAllByHandle(handle) {
        let promise = this.fetchAll()
        .then(() => {
            this.collection = Peep.all.filter(peep => peep.user.handle === handle)
        })

        return promise;
    }
}
