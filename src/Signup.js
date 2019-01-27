import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Username"></input>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    );
  }
}

export default Signup;