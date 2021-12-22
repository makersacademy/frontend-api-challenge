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
      console.log(data);
      const success = document.createElement('P')
      success.innerText = 'user successfully created'
      success.id = 'success'
      document.body.appendChild(success)
      const del = () => {
        success.remove()
      }
      setTimeout(del, 2000)
  })
}

module.exports.createUser = createUser