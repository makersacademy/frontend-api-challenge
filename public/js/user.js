export class User {
    static current;

    static createAccount(handle, password) {
        let requestURL = "https://chitter-backend-api-v2.herokuapp.com/users";
        
        let body = JSON.stringify({
            user:
            {
                handle: `${handle}`,
                password: `${password}`
            }
        });

        let promise = fetch(requestURL,
            {
                method: "POST",
                headers: { "Content-Type":"application/json" },
                body: body   
            }
        )
        .then(response => response.json())
        .then(data => {
            this.current = data;
            console.log(this.current);
        })

        return promise;
    }

    static login() {

    }

    static logout() {

    }
}
