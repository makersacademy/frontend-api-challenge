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
    console.log(data);
    alert("Successfully logged in.")
    window.location.reload();
  })
}

module.exports.login = login