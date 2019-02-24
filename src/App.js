import React, { Component } from 'react';
import './App.css';
import Peeps from './components/Peeps.js'
import axios from 'axios';

class App extends Component {
state = {
  peeps: []
}

componentDidMount(){
  axios.get('https://chitter-backend-api.herokuapp.com/peeps')
  .then(res => this.setState({peeps: res.data}))
}

  render() {
    return (
      <div className="App">
      <Peeps peeps={this.state.peeps}/>
      </div>
    );
  }
}

export default App;
