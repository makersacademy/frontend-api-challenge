authLogin = (username, password) => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "session": { 
        "handle": `${username}`, 
        "password": `${password}`
      }
    })
  })
    .then(response => response.json())
    .then(data => {
      if (data.errors === undefined) {
        createPeep(data)
      }
      else {
        throwError(data);
      }
    })
}