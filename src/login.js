async function login(handle, password) {
  const data = { session: {"handle": handle, "password": password} };

  await fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    sessionKey = data.session_key
    userID = data.user_id
    console.log('Success:', data);
    console.log(sessionKey, userID)
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
