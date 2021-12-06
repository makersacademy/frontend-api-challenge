const newSession = (user) => {
  fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Session key is: ', data['session_key']);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

module.exports = newSession