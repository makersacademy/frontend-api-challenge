let viewPeeps = document.getElementById("view-peeps")

fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
.then( res => res.json())
.then( peeps => {
peeps.forEach(peep => {
    viewPeeps.innerHTML += `<p> ${peep.user.handle} : ${peep.body}</p>`
});
})
