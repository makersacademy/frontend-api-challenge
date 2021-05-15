
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
}

async function loginUser(handle, password) {
  const response = await fetch(sessions, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({'session': {"handle":handle, "password":password}})
    })
    if (response.status != 200) {
      console.log('issue! Response status' + response.status);
      return;
    }
    return response.json()
    // todo: error handling

}
// session key should exist as a variable we pass in to other functions (like, create peep),
// and it should be necessary for initiating that other functionality.

const users = 'https://chitter-backend-api-v2.herokuapp.com/users'
const peeps = 'https://chitter-backend-api-v2.herokuapp.com/peeps'
const sessions = 'https://chitter-backend-api-v2.herokuapp.com/sessions'

// fetchMe(users).then(results => console.log(results))
// fetchMe(peeps).then(results => console.log(results))
var userData = null
const allPeeps = document.querySelector('#allPeeps')
const returnHome = document.querySelector('#backHome')


// ALL PEEPS page
// fetchMe(peeps).then((result) => {
//   result.forEach(peep =>
//     // allPeeps.innerHTML += peep.body + "<br />");
//     allPeeps.innerHTML += `<a href="#${peep.id}">${peep.body}</a> - <small> said ${peep.user.handle}</small> <br>`
//   );
// })

// homepage
loginPage = document.querySelector('#login')
loginPage.innerHTML = ` <form id ='loginForm'> Login please.<br />
<input id ="loginName" type="text" placeholder="handle"/>
<input id ="loginPassword" type="text" placeholder="password"/>
<button type="submit">submit</button></form>`

loginPage.addEventListener('submit',()=>{

  event.preventDefault()

  name = document.querySelector('#loginName').value
  password = document.querySelector('#loginPassword').value
  // we set a session key here (one we made... this is probably bad.)
  loginUser(name,password)
  .then(result => userData = {
    sessionKey : result.session_key,
    userId : result.user_id,
    userName : name }
   )
  // load main page
  .then(() =>{
    // ALL PEEPS page
    if (userData != null) {
      loginPage.innerHTML = '' //login page is gone
      // but so is username and password
      fetchMe(peeps).then((result) => {
        result.forEach(peep =>
          // allPeeps.innerHTML += peep.body + "<br />");
          allPeeps.innerHTML += `<a href="#${peep.id}">${peep.body}</a> - <small> said ${peep.user.handle}</small> <br>`
        );
      })
    }


  })
  .catch(err => loginPage.innerHTML += '<br /> failed to login' )



})
// createUser("EEEE","passwordE")
// >> {"id":407,"handle":"EEEE"}

// for seeing individual peeps
window.addEventListener('hashchange',()=>{
  allPeeps.innerHTML = '';
  returnHome.innerHTML = `<a href="">back to main page</a>`;
  console.log(location.hash.slice(1))
  fetchMe(`https://chitter-backend-api-v2.herokuapp.com/peeps/${location.hash.slice(1)}`)
    .then(result => allPeeps.innerHTML += `${result.body}`)
})
