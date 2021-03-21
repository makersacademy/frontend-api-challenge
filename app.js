let viewPeeps = document.getElementById("view-peeps")

fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
.then( res => res.json())
.then( peeps => {
peeps.forEach(peep => {
    viewPeeps.innerHTML += `<p> ${peep.user.handle} : ${peep.body}</p>`
});
})

let userPeeps = document.getElementById("view-user-peeps")
let viewUserPeeps = document.getElementById("peeps-by-user")

userPeeps.addEventListener("click", evt => {
    let userName = document.getElementById("username").value
    document.getElementById("title").textContent = `${userName}'s Peeps:`
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
    .then( res => res.json())
    .then( peeps => { 
        
        peeps.forEach(peep => { if (peep.user.handle === userName) {
            viewUserPeeps.innerHTML += `<p>${peep.body}</p>`
        }
        });
    })
})



let signUp = document.getElementById("create-user")

signUp.addEventListener("click", evt => {
    let handle = document.getElementById("handle").value
    let password = document.getElementById("password").value
    let userJson = JSON.parse(`{"user": {"handle":"${handle}", "password":"${password}"}}`)
    fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userJson)
    })
    .then(res => res.json())
    .then(json => console.log(json))
    
})
