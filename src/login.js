callback = (data) => {
  data
}

const login = (handle, password) => {
  sessionStorage.setItem("handle", `${handle}`)
  sessionStorage.setItem("password", `${password}`)
  data = {"session": {"handle":`${handle}`, "password":`${password}`}}
  fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    sessionStorage.setItem("id", data.user_id)
    sessionStorage.setItem("key", data.session_key)
    document.querySelector('#welcome').innerText = `Wow, you're back so soon. Let's get peeping!`
    document.querySelector('#signup').style.display = "none"
    document.querySelector('#login').style.display = "none"
    document.querySelector('#post').style.display = ""
    document.querySelector('.peep').style.display = ""
    const success = document.createElement('P')
    success.innerText = 'successfully logged in'
    success.id = 'success'
    document.body.appendChild(success)
    const del = () => {
      success.remove()
    }
    setTimeout(del, 2000)
  })
}

module.exports.login = login