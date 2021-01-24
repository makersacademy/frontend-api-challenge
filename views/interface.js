function getPostData() {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then(response => {
    response.json().then(post => {
    post.forEach((element, index, array) => {
        let peeps = element.body
        document.getElementById("peeps").append(peeps)
        document.getElementById("peeps").innerHTML += "<br>";
        })
   })
 })
}

let button = document.getElementById('find-peep')
button.addEventListener("click", function() {
    let area = document.getElementById('peep-id')
    let id = area.value
    area.value = ""
    getSinglePeep(id)
})

function getSinglePeep(id) {
    
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps" + `/${id}`).then(response => {
    response.json().then(post => {
    console.log(post)
     document.getElementById('peeps').innerHTML = `${post}${post.body}`;
   }) 
 })
}

function renderPost(postData) {
    let postHeadingHTML = `<p>${postData.id}</p>`;
    let postBodyHTML = `<p>${postData.body}</p>`;
        return `${postHeadingHTML}${postBodyHTML}`;
}

getPostData();

let newUser = {
    handle: "Chris", 
    password: "password"
  }
function createNewUser(handle, password) {
  fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
    method: "POST",
    headers: {"Content-type": "application/json; charset=UTF-8",
    dataType: "json"
    },
    handle: JSON.stringify({handle: handle}),
    password: JSON.stringify({password: handle})
  })

  .then(res => {
    return res.json()
  })
 
//   .then(response => {
//       response.json()
//   }) 
//   .then(json => {
//       console.log(json)
//   });
}

createNewUser("chris", "password")