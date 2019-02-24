import React, { Component, Fragment } from "react";
import Logo from "./components/Logo";
import LoginForm from "./components/LoginForm";
import Peep from "./components/Peep";
import "./App.css";

class App extends Component {
  state = {
    peeps: [],
    loggedIn: false
  };

  componentWillMount() {
    const getPeeps = async () => {
      const endpoint = "https://chitter-backend-api.herokuapp.com/peeps";
      const response = await fetch(endpoint);
      const peepsJson = await response.json();
      this.setState({ peeps: peepsJson });
    };
    getPeeps();
  }

  render() {
    return (
      <Fragment>
        <Logo />
        <LoginForm />
        {this.state.peeps.map(peep => (
          <Peep key={peep.id} details={peep} />
        ))}
        {/* {console.log(this.state.peeps)} */}
      </Fragment>
    );
  }
}

export default App;
