import React, { Component, Fragment } from "react";

export default class LoginForm extends Component {
  usernameRef = React.createRef();
  passwordRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const loginDetails = {
      username: this.usernameRef.current.value,
      password: this.passwordRef.current.value
    };
    console.log(loginDetails);
    e.currentTarget.reset();
  };

  render() {
    return (
      <Fragment>
        <form action="post" onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={this.usernameRef}
            name="username"
            placeholder="username"
            required
          />
          <input
            type="password"
            ref={this.passwordRef}
            name="password"
            placeholder="password"
            required
          />
          <input type="submit" value="login" />
        </form>
      </Fragment>
    );
  }
}
