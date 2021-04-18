let theInterface = new Interface(makeGetRequest, makePostRequest)

 theInterface.displayCries()

// let welcomeDiv = document.getElementById("welcome-wagon-div")
let welcomeButtonDiv = document.getElementById("signup-Login-Div")
let signupButton = document.getElementById("sign-up")
let loginButton = document.getElementById("log-in")

signupButton.addEventListener('click', function() {
  signupButton.remove()
  loginButton.remove()
  welcomeButtonDiv.insertAdjacentHTML('beforeend',
    `<form id="signup-form">
      <input type="text" placeholder="username" required>
      <input type="text" placeholder="password" id="password-entry" required>
      <input type="submit" value="Submit">
    </form>`
  )

  let signupForm = document.getElementById('signup-form')

  signupForm.addEventListener('submit', function() {
    inputString = {
      handle: `${signupForm.elements[0].value}`,
      password: `${signupForm.elements[1].value}`
    }

    theInterface.submitNewUser(inputString)

    event.preventDefault()
  });
})
