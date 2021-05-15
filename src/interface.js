
async function fetchMe(url){ // ONLY FOR GETS
  const response = await fetch(url)
  return response.json()
}


async function createUser(handle, password) {
  const response = await fetch(users, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({'user': {"handle":handle, "password":password}})
    });
    console.log(response.json())
    // todo: error handling

}

async function loginUser(handle, password) {
  const response = await fetch(sessions, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({'session': {"handle":handle, "password":password}})
    });
    return response.json()
    // todo: error handling

}
// login takes in password and handle
// session key should exist as a variable we pass in to other functions (like, create peep),
// and it should be necessary for initiating that other functionality.

const users = 'https://chitter-backend-api-v2.herokuapp.com/users'
const peeps = 'https://chitter-backend-api-v2.herokuapp.com/peeps'
const sessions = 'https://chitter-backend-api-v2.herokuapp.com/sessions'

// fetchMe(users).then(results => console.log(results))
// fetchMe(peeps).then(results => console.log(results))

const allPeeps = document.querySelector('#allPeeps')
const returnHome = document.querySelector('#backHome')

// homepage
fetchMe(peeps).then((result) => {
  result.forEach(peep =>
    // allPeeps.innerHTML += peep.body + "<br />");
    allPeeps.innerHTML += `<a href="#${peep.id}">${peep.body}</a> - <small> said ${peep.user.handle}</small> <br>`
  );
})

// createUser("EEEE","passwordE")
// >> {"id":407,"handle":"EEEE"}
loginUser("EEEE","passwordE").then(result => console.log(result.session_key))

// for seeing individual peeps
window.addEventListener('hashchange',()=>{
  allPeeps.innerHTML = '';
  returnHome.innerHTML = `<a href="">back to main page</a>`;
  console.log(location.hash.slice(1))
  fetchMe(`https://chitter-backend-api-v2.herokuapp.com/peeps/${location.hash.slice(1)}`)
    .then(result => allPeeps.innerHTML += `${result.body}`)
})
