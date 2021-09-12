import fetch from "node-fetch";

export class Peep {
    static all;
    static current;

    static fetchID(id) {
        let promise = this.fetchAll()
        .then(() => this.current = Peep.all.find(peep => peep.id === id))

        return promise;
    }

    static fetchAll() {
        let promise = fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
        .then(response => response.json())
        .then(data => this.all = data)

        return promise;
    }
}
