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


like = (like) => {
  // console.log(id);
  // axios.post('https://chitter-backend-api.herokuapp.com/peeps', {'_2a_10_gKoUIFDSRBk8RLatmEQ9Be'}{
  // .then(res => this.setState({ peeps:
  // [...this.state.peeps, res.data]}))
}

  render() {
    return (
      <div className="App">
      <Peeps peeps={this.state.peeps} like={this.like}/>
      </div>
    );
  }
}

export default App;
//Peep is an object with keys {id, body, created_at, updated_at, user, likes})
