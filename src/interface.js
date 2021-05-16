
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
    if (response.status != 201) {
      console.log('issue! Response status' + response.status);
      return;
    }
    return response.json()

}
// _2a_12_GsVOHA4pptSvcz0WAvTvfO
// _2a_12_hw6od1Y7QbPw_l7_liYKOe
// _2a_12_gmZwRXetEyrx0P2IGItSoO

async function createPeep(content, userId, sessionKey) {
  // authString = `Token token=${sessionKey}`
  // console.log(authString)
  const response = await fetch(peeps, {
    method: 'POST',
    headers:{
      'Authorization':`Token token=${sessionKey}`,
      'Content-Type':'application/json'},
    body: JSON.stringify({'peep': {"user_id":userId, "body":content}})
    })
    if (response.status != 201) {
      console.log('issue! Response status' + response.status);
      return;
    }
    return response.json()

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
const loginPage = document.querySelector('#login')
const newPeep = document.querySelector('#newPeep')


// homepage

loginPage.innerHTML = ` <form id ='loginForm'> Login please.<br />
<input id ="loginName" type="text" placeholder="handle"/>
<input id ="loginPassword" type="text" placeholder="password"/>
<button type="submit">submit</button></form>`

loginPage.addEventListener('submit',()=>{

  event.preventDefault()
  console.log('login submitted')

  name = document.querySelector('#loginName').value
  password = document.querySelector('#loginPassword').value
  // we set a session key here (one we made... this is probably bad.)
  loginUser(name,password)
  .then(result => userData = {
    sessionKey : result.session_key,
    userId : result.user_id,
    userName : name })
  // load main page
  .then(() =>{
    // ALL PEEPS page
    if (userData != null) {
      loginPage.innerHTML = '' //login page is gone
      newPeep.innerHTML = `
      <form id="submitPeep">
      <textarea id="peepInputField" rows="3" cols="40" placeholder="your new peep..."></textarea>
      <button type="submit">submit</button>
      </form>`
      console.log(userData.sessionKey) /////
      // but so is username and password
      fetchMe(peeps).then((result) => {
        result.forEach(peep =>
          allPeeps.innerHTML += `<a href="#${peep.id}">${peep.body}</a> - <small> said ${peep.user.handle}</small> <br>`
        );
      })
    }


  })
  .catch(err => loginPage.innerHTML += '<br /> failed to login' )
  // <a href="#${peep.id}">${peep.body}</a> - <small> said ${peep.user.handle}</small> <br>
  newPeep.addEventListener('submit',()=> {
    event.preventDefault()
    console.log('peep submitted')
    console.log(userData.sessionKey) /////
    peepContent = document.querySelector('#peepInputField').value
    // console.log(peepContent, userData)
    createPeep(peepContent, userData.userId, userData.sessionKey)
    .then((result)=>{console.log(result)})


  })


})
// createUser("EEEE","passwordE") // {"id":407,"handle":"EEEE"}

// for seeing individual peeps
window.addEventListener('hashchange',()=>{
  allPeeps.innerHTML = '';
  returnHome.innerHTML = `<a href="">back to main page</a>`;
  console.log(location.hash.slice(1))
  fetchMe(`https://chitter-backend-api-v2.herokuapp.com/peeps/${location.hash.slice(1)}`)
    .then(result => allPeeps.innerHTML += `${result.body}`)
})
