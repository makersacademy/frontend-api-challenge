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
  })
}

module.exports.login = login