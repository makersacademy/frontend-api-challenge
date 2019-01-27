import React, { Component } from "react";

class Home extends Component {
  render(){
    return (
      <div>
        <h1>Join Chitter today</h1>
        <button><a href="/signup"></a></button>
        <button><a href="/login"></a></button>

        <h2>Live Peeps</h2>

      </div>
      
      
    );
  }
}

export default Home;