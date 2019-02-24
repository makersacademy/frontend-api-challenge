import React, { Component } from 'react';
import './App.css';
import Peeps from './components/Peeps.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Peeps />
      </div>
    );
  }
}

export default App;
