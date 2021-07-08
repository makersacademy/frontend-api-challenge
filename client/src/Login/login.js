import React from "react";

class Login extends React.Component {
  handleClick = () => {
    // start of post
    var url = "https://chitter-backend-api.herokuapp.com/sessions";
    var data = { session: { handle: "partyParrot", password: "password" } };

    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
    // end or post
    console.log("Click happened");
  };
  render() {
    return <button onClick={this.handleClick}>Log In</button>;
  }
}

export default Login;
