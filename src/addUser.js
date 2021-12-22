const createUser = (handle, password) => {
  data = {"user": {"handle":`${handle}`, "password":`${password}`}}
  fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
}

module.exports.createUser = createUser