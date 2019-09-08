import React from 'react';
import Signup from './Signup'

class RegisterUser extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    handle: '',
    password: ''
  }
}

changeHandler = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

submitHandler = (e) => {
  e.preventDefault()
  console.log(this.state)
  const url = 'https://chitter-backend-api.herokuapp.com/users'
  let data = {"user": {"handle":this.state.handle, "password":this.state.password}}
  console.log(data)
  fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
}

  render() {
    const {handle, password} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
        <div className="row">
        <div className="input-field col s6">
          <input id="first_name" type="text" name="handle" value={handle} onChange={this.changeHandler} className="validate" />
          <label for="handle">Username</label>
        </div>
     </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="password" type="password" name="password" value={password} onChange={this.changeHandler} className="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      <button class="waves-effect waves-light btn" type="submit">Sign up</button>
        </form>
       
      </div>
    );
  }
}

export default RegisterUser;