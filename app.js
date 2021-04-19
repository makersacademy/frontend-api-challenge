let theInterface = new Interface(makeGetRequest, makePostRequest)

theInterface.displayCries()

// let welcomeDiv = document.getElementById("welcome-wagon-div")
let welcomeButtonDiv = document.getElementById("signup-Login-Div")
let signupButton = document.getElementById("sign-up")
let loginButton = document.getElementById("log-in")
let cryEntryBox = document.getElementById("cry-entry-box")

signupButton.addEventListener('click', function() {
  event.preventDefault()
  signupButton.hidden = true
  loginButton.hidden = true
  welcomeButtonDiv.insertAdjacentHTML('beforeend',
    `<form id="signup-form">
      <input type="text" placeholder="username" required>
      <input type="text" placeholder="password" id="password-entry" required>
      <input type="submit" value="Submit">
    </form>`
  )

  let signupForm = document.getElementById('signup-form')

  signupForm.addEventListener('submit', function() {
    event.preventDefault()
    inputString = {
      handle: `${signupForm.elements[0].value}`,
      password: `${signupForm.elements[1].value}`
    }

    theInterface.submitNewUser(inputString)
  });
})

loginButton.addEventListener('click', function() {
  event.preventDefault()
  signupButton.remove()
  loginButton.remove()
  welcomeButtonDiv.insertAdjacentHTML('beforeend',
    `<form id="login-form">
      <input type="text" placeholder="username" required>
      <input type="text" placeholder="password" id="password-entry" required>
      <input type="submit" value="Submit">
    </form>`
  )

  let loginForm = document.getElementById('login-form')

  loginForm.addEventListener('submit', function() {
    event.preventDefault()
    inputString = {
      handle: `${loginForm.elements[0].value}`,
      password: `${loginForm.elements[1].value}`
    }

    theInterface.submitLogin(inputString)
  });
})

cryEntryBox.addEventListener('submit', function() {
  event.preventDefault()
  let inputCry = cryEntryBox.elements[0].value

  theInterface.createCry(inputCry)
})


// to look at - how do I bring asynchrous functions results back into the app.js (I would prefer to use this file to render HTML, while interface is purely for getting and receiving from the API)
