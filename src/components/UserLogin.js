import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';


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
    this.props.history.push('/');
    let session =  {"session": {"handle":this.state.handle, "password":this.state.password}}
      axios.post('https://chitter-backend-api.herokuapp.com/sessions', session).then(res => {
        sessionStorage.setItem('user_id', res.data.user_id)
        sessionStorage.setItem('session_key', res.data.session_key)
      })  
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
      <button class="waves-effect waves-light btn" type="submit">Login in</button>
        </form>
       
      </div>
    );
  }
}
 
export default withRouter(UserLogin);