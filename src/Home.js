import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state ={
      peeps: [],
    };
  }

  componentDidMount(){

    fetch('https://chitter-backend-api.herokuapp.com/peeps')
    .then(results => results.json())
    .then(json => {
      this.setState({
        peeps: json, 
      })
    });

  }
  
  render(){
   var { peeps } = this.state;
   return(
      <div className ="Home">
        <h1>Chitter Feed</h1>
        <ul>
          {peeps.map(peep => (
            <li key={peep.id}>
              Peep: {peep.body}  | Time: {peep.created_at} |User: {peep.user.handle}
            </li>
            ))};
        </ul>
      </div>
      
      
      
    );
  
  }
}

export default Home;