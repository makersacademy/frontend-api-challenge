import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
 
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Join Chitter Today</h1>
          <ul className="header">
          
            <li><NavLink to="/signup">Signup</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/">Home</NavLink></li>
          </ul>
          <div className="content">
             
             <Route path="/signup" component={Signup}/>
             <Route path="/login" component={Login}/>
             <Route path="/" component={Home}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default App;