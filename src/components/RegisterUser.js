import React from 'react';


class RegisterUser extends React.Component {

  componentDidMount() {
  const url = 'https://chitter-backend-api.herokuapp.com/users'
  var data = {user: {handle: "test-123", password: "123password"}};
  fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    // 'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
  }

  render() {
    return null
  }
}

export default RegisterUser;