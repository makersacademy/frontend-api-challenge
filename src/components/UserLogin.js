import React from 'react';


class UserLogin extends React.Component {
  constructor(props){
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
 
export default UserLogin;