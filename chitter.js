document.addEventListener("DOMContentLoaded", function(event) {
  window.chitterSession = window.chitterSession || {}

  document.getElementById("signup-button").addEventListener("click", (e) => {
    e.preventDefault()

    const name  = document.getElementById("username-sign-up").value;
    const password  = document.getElementById("password-sign-up").value;

    createUser(name, password)
      .then(() => {
        return createSession(name, password)
      })
      .catch((err) => {
        console.error(err)
      })
  })

  document.getElementById("login-button").addEventListener("click", (e) => {
    e.preventDefault()

    const name  = document.getElementById("username-log-in").value;
    const password  = document.getElementById("password-log-in").value;

    createSession(name, password)
      .catch((err) => {
        console.error(err)
      })
  })

  document.getElementById("create-peep").addEventListener('click', function(e) {
    e.preventDefault();
    const textBox = document.getElementById("peep-text-box")
    text = textBox.value;
    addPeep(text)
      .then(() => {
        fetchPeeps()
        textBox.value = "";
      })
      .catch((err) => {
        console.error(err)
      })
  })
})

const createUser = (name, password) => {
      return fetch("https://chitter-backend-api.herokuapp.com/users", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: `{"user": {"handle":"${name}", "password":"${password}"}}`,
      })
      .then((response) => {
          return response.json()
      })
}

const createSession = (name, password) => {
    return fetch("https://chitter-backend-api.herokuapp.com/sessions", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: `{"session": {"handle":"${name}", "password":"${password}"}}`,
    })
    .then((response) => {
        return response.json()
          .then((data) => {
            window.chitterSession = {
              userId: data.user_id,
              userName: name,
              sessionKey: data.session_key
            }
            onSignUpSuccess()
          })
    })
}

const onSignUpSuccess = () => {
  fetchPeeps()
  updateGreetingMessage()
  hideAnonymous()
  showLoggedIn()
}

const hideAnonymous = () => {
  const anonymous = document.getElementById("anonymous-user")
  anonymous.style.display = "none"
}

const showLoggedIn = () => {
  const anonymous = document.getElementById("logged-in-user")
  anonymous.style.display = "block"
}

const updateGreetingMessage = () => {
  const greetingUser = document.getElementById("greeting")
  greetingUser.innerText = `Welcome to Chitter ${window.chitterSession.userName}`
}

const fetchPeeps = () => {
  fetch("https://chitter-backend-api.herokuapp.com/peeps")
    .then((response) => {
      response.json().then((peeps) => {
        showPeeps(peeps)
      })
    .catch((err) => {
      console.error(err)
    })
  })
}

const showPeeps = (peeps) => {
  const displayEl = document.getElementById("peeps-list")
  displayEl.innerHTML = ""
  peeps.forEach((peep) => {
    const li = document.createElement("li");
    li.innerHTML = `<p>Peep: ${peep.body}</p><p>User: ${peep.user.handle}</p>`
    if (peep.user.handle === window.chitterSession.userName) {
      li.style.border = "solid 1px blue"
    }
    displayEl.appendChild(li);
  })
}

const addPeep = (text) => {
  const data = {
    peep: {
      user_id: window.chitterSession.userId,
      body: text
    }
  }
  return fetch("https://chitter-backend-api.herokuapp.com/peeps", {
      method: 'POST',
      headers: {
          'Authorization': `Token token=${window.chitterSession.sessionKey}`,
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
}
