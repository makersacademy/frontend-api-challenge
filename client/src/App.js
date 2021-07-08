import React, { Component } from "react";
import logo from "./logo.svg";
// import "./App.css";

import Header from "./Header/header.js";
import Login from "./Login/login.js";
import Compose from "./Compose/compose.js";
import ChitterFeed from "./Feed/feed.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Login />
        <Compose />
        <ChitterFeed />

        <footer className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
