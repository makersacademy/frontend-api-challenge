
async function fetchMe(url){ // ONLY FOR GETS
  const response = await fetch(url)
  return response.json()
}
// fetchMe(users).then(results => console.log(results))
// fetchMe(peeps).then(results => console.log(results))

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

async function createPeep(content, userId, sessionKey) {
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

function showLoginForm() {
  return `<form id ='loginForm'> Login please.<br />
  <input id ="loginName" type="text" placeholder="handle"/>
  <input id ="loginPassword" type="text" placeholder="password"/>
  <button type="submit">submit</button></form>`
}
function showNewPeepForm(){
  return `
  <form id="submitPeep">
  <textarea id="peepInputField" rows="3" cols="40" placeholder="your new peep..."></textarea>
  <button type="submit">submit</button>
  </form>`
}

const users = 'https://chitter-backend-api-v2.herokuapp.com/users'
const peeps = 'https://chitter-backend-api-v2.herokuapp.com/peeps'
const sessions = 'https://chitter-backend-api-v2.herokuapp.com/sessions'


var userData = null
const allPeeps = document.querySelector('#allPeeps')
const returnHome = document.querySelector('#backHome')
const loginPage = document.querySelector('#login')
const newPeep = document.querySelector('#newPeep')


//// LOGIN PAGE ////
loginPage.innerHTML = showLoginForm()
loginPage.addEventListener('submit',()=>{
  event.preventDefault()
  console.log('login submitted')
  //// MAKE COOKIES //// (custom. need to refac!)
  name = document.querySelector('#loginName').value
  password = document.querySelector('#loginPassword').value
  loginUser(name,password)
  .then(result => userData = {
    sessionKey : result.session_key,
    userId : result.user_id,
    userName : name })
  //// ALL PEEPS page ////
  .then(() =>{
    if (userData != null) {
      loginPage.innerHTML = ''
      newPeep.innerHTML = showNewPeepForm()
      fetchMe(peeps).then((result) => {
        result.forEach(peep =>
          allPeeps.innerHTML += `<a href="#${peep.id}">${peep.body}</a> - <small> said ${peep.user.handle}</small> <br>`
        );
      })
    }

  })
  .catch(err => loginPage.innerHTML += '<br /> failed to login' )
  //// NEW PEEP CREATION ////
  newPeep.addEventListener('submit',()=> {
    event.preventDefault()
    console.log('peep submitted')
    peepContent = document.querySelector('#peepInputField').value
    createPeep(peepContent, userData.userId, userData.sessionKey)
    //// PAGE REFRESH ////
    .then((result)=>{
      allPeeps.innerHTML = ''
      fetchMe(peeps).then((result) => {
        result.forEach(peep =>
          allPeeps.innerHTML += `<a href="#${peep.id}">${peep.body}</a> - <small> said ${peep.user.handle}</small> <br>`
        );
      })
    })

  })


})

// for seeing individual peeps
// PROBABLY NEED TO MOVE THIS, BUT MAYBE NOT.
// MAYBE ALL PEEPS SHOULD BE VISIBLE AT ALL TIMES?
window.addEventListener('hashchange',()=>{
  allPeeps.innerHTML = '';
  returnHome.innerHTML = `<a href="">back to main page</a>`;
  console.log(location.hash.slice(1))
  fetchMe(`https://chitter-backend-api-v2.herokuapp.com/peeps/${location.hash.slice(1)}`)
    .then(result => allPeeps.innerHTML += `${result.body}`)
})
