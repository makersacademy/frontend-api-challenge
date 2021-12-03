const login = (handle, password) => {
  sessionStorage.setItem("handle", `${handle}`)
  sessionStorage.setItem("handle", `${password}`)
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