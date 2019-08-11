function putDataOnPage(data) {
    const displayEl = document.getElementById("display")
    const firstPeep = data[0].body
    displayEl.innerHTML = `<h2>First Peep: ${firstPeep}</h2>`
}

function updateGreeting(data) {
    const displayEl = document.getElementById("greeting")
    displayEl.innerText = `Hello ${data.handle}`
}

function login(e) {
  e.preventDefault()
  console.log("hi")
}

document.getElementById("fetch").addEventListener("click", (e) => {
    e.preventDefault()
    fetch("https://chitter-backend-api.herokuapp.com/peeps")
        .then((response) => {
            response.json()
                .then((data) => {
                    console.log(data)
                    putDataOnPage(data)
                })
                .catch((jsonErr) => {
                    console.error(jsonErr)
                })
        })
        .catch((err) => {
            console.error(err)
        })
})

document.getElementById("login").addEventListener("click", (e) => {
    e.preventDefault()

    const name  = document.getElementById("username-sign-in").value; // update to get from user input
    const password  = document.getElementById("password-sign-in").value; // update to get from user input

    fetch("https://chitter-backend-api.herokuapp.com/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: `{"user": {"handle":"${name}", "password":"${password}"}}`,
    })
    .then((response) => {
        response.json()
            .then((data) => {
                console.log(data)
                updateGreeting(data)
            })
            .catch((jsonErr) => {
                console.error(jsonErr)
            })
    })
    .catch((err) => {
        console.error(err)
    })
})
