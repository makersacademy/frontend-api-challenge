document.addEventListener('DOMContentLoaded', () => {

  let session_key = null

  getPeeps()
  bannerButtons(session_key)

  //clicking sign up
  document.querySelector('#SignUpButton').addEventListener('click', () => {
    document.querySelector('#signUpDisplay').style.display = 'block'
    document.querySelector('#homePageDisplay').style.display = 'none'
  })

  //creating account
  document.getElementById('signUpForm').addEventListener('submit', (event) => {
    event.preventDefault()
    let username = document.getElementById('newUserName').value
    let password = document.getElementById('newPassword').value
    createNewUser(username, password)
    document.querySelector('#signUpDisplay').style.display = 'none'
    document.querySelector('#homePageDisplay').style.display = 'block'
  })

  //signing in
  document.getElementById('signInForm').addEventListener('submit', (event) => {
    event.preventDefault()
    let signInUsername = document.getElementById('signInUsername').value
    let signInPassword = document.getElementById('signInPassword').value
    signIn(signInUsername, signInPassword).then ((signInValues) => {
      session_key = signInValues.session_key
      bannerButtons(session_key)
      successMessage('Sign In successful!')
    })
  })
})

async function getPeeps() {
  let rawResponse = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
  let peepsJSON = await rawResponse.json()
  peepsJSON.forEach(peep => { 
    let peepNode = document.createElement('div')
    peepNode.setAttribute('class', 'peepFeedDiv')
    let peepInfo = document.createElement('div')
    let creation = createdAt(peep.created_at) 
    peepNode.innerText = peep.body
    peepInfo.innerText = `by ${peep.user.handle} at ${creation}`  
    peepNode.appendChild(peepInfo)
    document.getElementById('peepsList').appendChild(peepNode)
  })
}

function createdAt(timestamp) {
  let dateTime = timestamp.split('T')
  let date = dateTime[0].split('-')
  let time = dateTime[1].split(':')
  return `${time[0]}:${time[1]} on ${date[2]}/${date[1]}`
}

function bannerButtons(session_key) {
  if(session_key) {
    document.querySelector('#loggedInButtons').style.display = 'block'
    document.querySelector('#loggedOutButtons').style.display = 'none'
  } else {
    document.querySelector('#loggedInButtons').style.display = 'none'
    document.querySelector('#loggedOutButtons').style.display = 'block'
  }
}

async function createNewUser(username, password) {
  const rawResponse = await fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify({user: {"handle": username, "password": password}})
  })
  let ans = await rawResponse.json()
  if(ans.handle[0] === 'has already been taken') {
    window.FlashMessage.error('Error creating account please try again', {
      timeout: 8000,
      progress: true,
      theme: 'dark'
    })
  } else {
    successMessage('User created! Please sign in.')
  }
}

async function signIn(username, password) {
  const rawResponse = await fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify({session: {"handle": username, "password": password}})
  })

  let response = await rawResponse.json()
  console.log(response)
  return response
}

function successMessage(message) {
  window.FlashMessage.success(message, {
    timeout: 8000,
    interactive: false,
    progress: true,
    theme: 'dark'
  })
}
