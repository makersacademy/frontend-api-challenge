import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Log in to Chitter</h1>
        <form>
          <input type="text" name="username" placeholder="Username" ></input>
          <input type="password" name="password" placeholder="Password"></input>
        </form>
      </div>
    );
  }
}

export default Login;