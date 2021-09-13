export class User {
    static current;

    constructor(handle, password) {
        this.handle = handle;
        this.password = password;
        this.id;
    }

    createAccount() {
        let requestURL = "https://chitter-backend-api-v2.herokuapp.com/users";
        let params = new URLSearchParams({
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body:
            {
                "user":
                {
                    "handle": `${this.handle}`,
                    "password": "`${this.password}`"
                }
            }
        })

        let promise = fetch(requestURL, params)
        .then(response => response)
        .then(data => {
            this.id = data.id;
            this.current = this;
        })

        return promise;
    }

    login() {

    }

    logout() {

    }
}
