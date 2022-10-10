class PeepsView{
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.userId = ''
    this.sessionKey = '';
    this.headerEl = document.querySelector('#header')
    this.mainContainerEl = document.querySelector('#main-container');

  }

  getSession () {
    return this.sessionKey
  }

  displayPeeps () {
    this.model.getPeeps().forEach((peep) => {
      const div = document.createElement('div')
      div.className = 'peep'

      const peepAuthor = document.createElement('h4')
      peepAuthor.className = 'peepAuthor'
      peepAuthor.innerText = `@${peep['user']['handle']}`

      const divPeepContent = document.createElement('div')
      divPeepContent.className = 'peepContent'
      divPeepContent.innerText = peep['body']

      div.append(peepAuthor)
      div.append(divPeepContent)

      this.mainContainerEl.append(div)
    })
  }

  loadPeepsFromApi () {
    this.api.loadPeeps((peeps) => {
      peeps.forEach((peep) => this.model.addPeep(peep));
      this.displayPeeps();
    })
  }

  loginHeader () {
    const username = document.createElement('INPUT')
    username.setAttribute('type', 'text')
    username.id = 'usernameLogIn'
    this.headerEl.append(username)

    const password = document.createElement('INPUT')
    password.setAttribute('type', 'text')
    password.id = 'passwordLogIn'
    this.headerEl.append(password)

    const loginButton = document.createElement('button')
    loginButton.id = 'loginBtn'
    loginButton.innerText = 'Log in'
    this.headerEl.append(loginButton)

    loginButton.addEventListener('click', () => this.login());
  }

  signupHeader () {
    const username = document.createElement('INPUT')
    username.setAttribute('type', 'text')
    username.id = 'usernameSignUp'
    this.headerEl.append(username)

    const password = document.createElement('INPUT')
    password.setAttribute('type', 'text')
    password.id = 'passwordSignUp'
    this.headerEl.append(password)

    const loginButton = document.createElement('button')
    loginButton.id = 'signupBtn'
    loginButton.innerText = 'Sign up'
    this.headerEl.append(loginButton)

    loginButton.addEventListener('click', () => this.signup());
  }

  login () {
    const usernameEl = document.querySelector('#usernameLogIn')
    const passwordEl = document.querySelector('#passwordLogIn')
    this.api.loadSession(usernameEl.value, passwordEl.value, (response) => {
      this.userId = response.user_id
      this.sessionKey = response.session_key
    }, () => this.loginUnsuccessfull())
  }

  signup () {
    const usernameEl = document.querySelector('#usernameSignUp')
    const passwordEl = document.querySelector('#passwordSignUp')
    this.api.createUser(usernameEl.value, passwordEl.value, (response) => {
      this.userId = response.user_id
      this.sessionKey = response.session_key
    }, () => {})
  }

  loginUnsuccessfull () {
    const div = document.createElement('div')
    div.innerText = "Sorry, we could not find your account"
    div.id = 'loginError'
    this.headerEl.append(div)
  }


}

module.exports = PeepsView;
